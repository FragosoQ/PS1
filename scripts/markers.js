class Markers {
  constructor(countries, {
    markerRadius = 2
  } = {}) {
    this.countries = countries;
    this.radius = config.sizes.globe + config.sizes.globe * config.scale.markers;

    groups.markers = new THREE.Group();
    groups.markers.name = 'GlobeMarkers';

    this.markerGeometry = new THREE.SphereGeometry(markerRadius, 15, 15);
    this.markerMaterial = new THREE.MeshBasicMaterial();
    this.markerMaterial.transparent = true;
    this.markerMaterial.opacity = 0.8;

    this.create();
  }

  create() {
    // Store country data with markers
    const markerData = [];
    
    for(let i = 0; i < this.countries.length; i++) {
      const country = this.countries[i];
      if(country.latitude && country.longitude) {
        const lat = +country.latitude;
        const lng = +country.longitude;

        const cords = toSphereCoordinates(lat, lng, this.radius);
        // Pass the country name to the Marker constructor
        const marker = new Marker(this.markerMaterial, this.markerGeometry, country.name, cords, { countryName: country.name });
        elements.markers.push(marker);
        
        // Store marker with geographic data for proximity detection
        if(marker.label) {
          markerData.push({
            marker: marker,
            lat: lat,
            lng: lng,
            countryName: country.name
          });
        }
      }
    }
    
    // Adjust label offsets to prevent overlaps
    this.adjustLabelPositions(markerData);
  }
  
  adjustLabelPositions(markerData) {
    // Use 3D distance in space for more accurate overlap detection
    const minDistance = 60; // Minimum 3D distance between labels
    
    // Sort markers: Portugal first, then others
    markerData.sort((a, b) => {
      if (a.countryName.toUpperCase() === 'PORTUGAL') return -1;
      if (b.countryName.toUpperCase() === 'PORTUGAL') return 1;
      return 0;
    });
    
    // Available offset levels with more spacing
    const offsetLevels = [2, 4, 6, 8, 10];
    
    for(let i = 0; i < markerData.length; i++) {
      if(!markerData[i].marker.label) continue;
      
      const marker1 = markerData[i];
      let bestOffset = offsetLevels[0];
      let hasConflict = true;
      
      // Try each offset level until we find one without conflicts
      for(let offsetIdx = 0; offsetIdx < offsetLevels.length && hasConflict; offsetIdx++) {
        const testOffset = offsetLevels[offsetIdx];
        hasConflict = false;
        
        // Check against all previously placed markers
        for(let j = 0; j < i; j++) {
          if(!markerData[j].marker.label) continue;
          
          const marker2 = markerData[j];
          
          // Calculate 3D distance between marker points
          const pos1 = marker1.marker.group.position;
          const pos2 = marker2.marker.group.position;
          const dx = pos1.x - pos2.x;
          const dy = pos1.y - pos2.y;
          const dz = pos1.z - pos2.z;
          const distance3D = Math.sqrt(dx*dx + dy*dy + dz*dz);
          
          // If markers are close in 3D space
          if(distance3D < minDistance) {
            // Check if this offset would conflict with the other marker's offset
            const otherOffset = marker2.marker.labelOffset;
            // Require at least 2 units of separation for nearby markers
            if(Math.abs(testOffset - otherOffset) < 2) {
              hasConflict = true;
              break;
            }
          }
        }
        
        if(!hasConflict) {
          bestOffset = testOffset;
          break;
        }
      }
      
      // Apply the best offset found
      marker1.marker.labelOffset = bestOffset;
      if(marker1.marker.label) {
        marker1.marker.label.position.y = bestOffset;
      }
    }
  }
}