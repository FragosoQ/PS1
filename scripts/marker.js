class Marker {
  constructor(material, geometry, label, cords, {
    textColor = 'white',
    pointColor = config.colors.globeMarkerColor,
    glowColor = config.colors.globeMarkerGlow,
    countryName = '',
    labelOffset = 2
  } = {}) {
    this.material = material;
    this.geometry = geometry;
    this.labelText = label;
    this.cords = cords;
    this.countryName = countryName;
    this.labelOffset = labelOffset;

    this.isAnimating = false;

    this.textColor = textColor;
    this.pointColor = new THREE.Color(pointColor);
    this.glowColor = new THREE.Color(glowColor);

    this.group = new THREE.Group();
    this.group.name = 'Marker';

    this.createLabel();
    this.createPoint();
    this.createGlow();
    this.setPosition();

    groups.markers.add(this.group);
  }

  createLabel() {
    // Create label for Portugal and all destination countries
    const countryUpper = this.countryName.toUpperCase();
    
    // Check if this is Portugal (origin)
    const isPortugal = countryUpper === 'PORTUGAL';
    
    // Check if this is one of the destinations
    let isDestination = false;
    if (data.connections && data.connections.Portugal) {
      const dest = data.connections.Portugal.find(dest => {
        // Suporta formato antigo (string) e novo (objeto com country e slot)
        const destCountry = typeof dest === 'string' ? dest : dest.country;
        return destCountry.toUpperCase() === countryUpper;
      });
      if (dest) {
        isDestination = true;
      }
    }
    
    // Only create label if Portugal or a destination
    if (!isPortugal && !isDestination) {
      this.label = null;
      return;
    }

    // Abreviaturas para países com nomes extensos em português
    const countryAbbreviations = {
      'INGLATERRA': 'UK',
      'REINO UNIDO': 'UK',
      'ESTADOS UNIDOS': 'EUA',
      'EUA': 'EUA',
      'REPÚBLICA DOMINICANA': 'REP. DOM.',
      'REP. DOMINICANA': 'REP. DOM.',
      'ARÁBIA SAUDITA': 'ARÁBIA SAUDITA',
      'EMIRADOS ÁRABES UNIDOS': 'EAU',
      'BÓSNIA E HERZEGOVINA': 'BÓSNIA',
      'REPÚBLICA CHECA': 'CHÉQUIA',
      'CHÉQUIA': 'CHÉQUIA',
      'HONG KONG SAR, CHINA': 'HONG KONG',
      'MACAO SAR, CHINA': 'MACAU'
    };
    
    // Usa sempre o labelText que vem do countries.js (em português)
    const nameForDisplay = this.labelText;
    
    // Use abbreviation if available, otherwise use the name
    const displayName = countryAbbreviations[nameForDisplay.toUpperCase()] || nameForDisplay;

    const textResult = this.createText(displayName);
    const texture = new THREE.Texture(textResult.canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.needsUpdate = true;
    textures.markerLabels.push(texture);

    const material = new THREE.SpriteMaterial()
    material.map = texture;
    material.depthTest = false;
    material.depthWrite = false;
    material.useScreenCoordinates = false;

    this.label = new THREE.Sprite(material);
    // Adjust scale based on canvas dimensions while maintaining aspect ratio
    const aspectRatio = textResult.width / textResult.height;
    const baseScale = 11; // Base height scale (reduced by 30% from 16)
    const scaleY = baseScale;
    const scaleX = baseScale * aspectRatio;
    this.label.scale.set( scaleX, scaleY, 1 );
    this.label.center.x = 0.5;
    this.label.translateY(this.labelOffset);
    this.label.renderOrder = 10000; // Very high render order to ensure labels always render on top

    this.group.add(this.label);
    elements.markerLabel.push(this.label);
  }

  createPoint() {
    this.point = new THREE.Mesh( this.geometry, this.material );
    this.point.material.color.set(this.pointColor);
    this.group.add(this.point);
    elements.markerPoint.push(this.point);
  }

  createGlow() {
    // Ripple effects disabled for all markers
    this.glow = null;
  }

  animateGlow() {
    // Glow animation (disabled for all markers)
    if(!this.glow) {
      return;
    }

    if(!this.isAnimating) {
      if(Math.random() > 0.99) {
        this.isAnimating = true;
      }
    } else if(this.isAnimating) {
      this.glow.scale.x += 0.025;
      this.glow.scale.y += 0.025;
      this.glow.scale.z += 0.025;
      this.glow.material.opacity -= 0.005;

      if(this.glow.scale.x >= 4) {
        this.glow.scale.x = 1;
        this.glow.scale.y = 1;
        this.glow.scale.z = 1;
        this.glow.material.opacity = 0.6;
        this.glow.isAnimating = false;
      }
    }
  }

  setPosition() {
    const {x, y, z} = this.cords
    this.group.position.set(-x, y, -z)
  }

  createText(labelText = this.labelText) {
    const element = document.createElement('canvas');
    
    // Use consistent font size for all labels
    const fontSize = 54;
    const padding = 8;

    // Create temporary text to measure dimensions
    const tempCanvas = new fabric.StaticCanvas(null);
    const tempText = new fabric.Text(labelText, {
      fontFamily: 'Open Sans',
      fontSize: fontSize
    });
    
    const textWidth = tempText.width;
    const textHeight = tempText.height;
    const canvasWidth = textWidth + padding * 2;
    const canvasHeight = textHeight + padding * 2;

    // Set canvas dimensions
    element.width = canvasWidth;
    element.height = canvasHeight;
    
    const canvas = new fabric.Canvas(element, {
      width: canvasWidth,
      height: canvasHeight
    });

    const text = new fabric.Text(labelText, {
      left: padding, 
      top: padding, 
      fill: 'black', 
      fontFamily: 'Open Sans',
      fontSize: fontSize
    });

    // Create a rounded rectangle background
    const rect = new fabric.Rect({
      left: 0,
      top: 0,
      width: canvasWidth,
      height: canvasHeight,
      fill: 'rgba(255, 255, 255, 0.85)',
      rx: 8,
      ry: 8
    });

    canvas.add(rect);
    canvas.add(text);
    
    return {
      canvas: element,
      width: canvasWidth,
      height: canvasHeight
    };
  }
}