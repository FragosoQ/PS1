// Configuração do Google Sheets
const SHEET_ID = '1GQUB52a2gKR429bjqJrNkbP5rjR7Z_4v85z9M7_Cr8Y';
// Usando a folha PS1 como origem principal (contém 'Chave de Procura', dados completos de produção e 'País 1..País 3')
const SHEET_NAME = 'PS1';

/**
 * MIGRAÇÃO DE PS4 PARA PS1
 * 
 * Alterado em: Fevereiro 2026
 * A origem de dados foi alterada de PS4 para PS1
 * 
 * Novas colunas disponíveis em PS1:
 * - Chave de Procura (identificador)
 * - LOTE, QUANTIDADE / LOTE
 * - DATA PRETENDIDA, DATA LASER
 * - INÍCIO/FIM SERRALHARIA
 * - INÍCIO/FIM SOLDADURA / ACABAMENTO
 * - P1(h) a P5(h) (tempos por estação)
 * - País 1, País 2, País 3 (para globo 3D)
 * - STATUS (estado da encomenda)
 * - Operador (responsável)
 * - GERAL(T), GERAL(R) (tempos gerais)
 * - Percentagens de conclusão (P1% a P13_3%, V%, FE%, ESP%)
 * 
 * O sistema continua a extrair automaticamente:
 * - Países de destino (País 1, 2, 3)
 * - Coordenadas geográficas
 * - Conexões Portugal → Destinos
 * 
 * Para adicionar novas funcionalidades com as colunas extras, 
 * modifique a função convertSheetDataToAppFormat()
 */

/**
 * Carrega dados do Google Sheets
 * @returns {Promise<Array>} Array com os dados da planilha
 */
async function loadGoogleSheetData() {
  try {
    console.log('🌐 Carregando dados do Google Sheets (PSMulti)...');
    
    // URL para aceder ao Google Sheets como JSON
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text();
    
    // Remove o prefixo do Google (google.visualization.Query.setResponse)
    const jsonString = text.substring(47, text.length - 2);
    const json = JSON.parse(jsonString);
    
    // Processa os dados
    const rows = json.table.rows;
    const cols = json.table.cols;
    
    // Extrai os nomes das colunas
    const headers = cols.map(col => col.label || col.id);
    console.log('📋 Cabeçalhos encontrados:', headers);
    
    // Converte as linhas em objetos
    const data = rows.map((row, index) => {
      const obj = {};
      row.c.forEach((cell, cellIndex) => {
        const header = headers[cellIndex];
        obj[header] = cell ? cell.v : null;
      });
      return obj;
    }).filter(row => {
      // Remove linhas vazias
      return Object.values(row).some(val => val !== null && val !== '');
    });
    
    console.log(`✅ ${data.length} linhas carregadas do Google Sheets`);
    console.log('Primeira linha:', data[0]);
    
    return data;
    
  } catch (error) {
    console.error('❌ Erro ao carregar dados do Google Sheets:', error);
    throw error;
  }
}

/**
 * Carrega banco de dados de países com coordenadas
 * @returns {Promise<Array>} Array com todos os países e suas coordenadas
 */
async function loadCountriesDatabase() {
  try {
    const response = await fetch('assets/data/countries.all.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao carregar banco de dados de países:', error);
    return [];
  }
}

/**
 * Busca coordenadas de um país no banco de dados
 * @param {string} countryName - Nome do país
 * @param {Array} database - Banco de dados de países
 * @returns {Object|null} Objeto com latitude e longitude, ou null
 */
function findCountryCoordinates(countryName, database) {
  if (!countryName) return null;
  
  const normalizedName = countryName.trim().toLowerCase();

  const normalizeCountryLabel = (name) => {
    if (!name) return name;
    return name === 'United Kingdom' ? 'UK' : name;
  };
  
  // Mapeamento completo PT -> EN de nomes de países
  const nameMapping = {
    // PT -> EN
    'afeganistão': 'Afghanistan',
    'áfrica do sul': 'South Africa',
    'albânia': 'Albania',
    'alemanha': 'Germany',
    'andorra': 'Andorra',
    'angola': 'Angola',
    'antígua e barbuda': 'Antigua and Barbuda',
    'arábia saudita': 'Saudi Arabia',
    'argélia': 'Algeria',
    'argentina': 'Argentina',
    'arménia': 'Armenia',
    'austrália': 'Australia',
    'áustria': 'Austria',
    'azerbaijão': 'Azerbaijan',
    'bahamas': 'Bahamas',
    'bangladexe': 'Bangladesh',
    'barbados': 'Barbados',
    'barém': 'Bahrain',
    'bélgica': 'Belgium',
    'belize': 'Belize',
    'benim': 'Benin',
    'bielorrússia': 'Belarus',
    'bolívia': 'Bolivia',
    'bósnia e herzegovina': 'Bosnia and Herzegovina',
    'botsuana': 'Botswana',
    'brasil': 'Brazil',
    'brunei': 'Brunei Darussalam',
    'bulgária': 'Bulgaria',
    'burkina faso': 'Burkina Faso',
    'burundi': 'Burundi',
    'butão': 'Bhutan',
    'cabo verde': 'Cabo Verde',
    'camarões': 'Cameroon',
    'camboja': 'Cambodia',
    'canadá': 'Canada',
    'catar': 'Qatar',
    'cazaquistão': 'Kazakhstan',
    'chade': 'Chad',
    'chéquia': 'Czech Republic',
    'chile': 'Chile',
    'china': 'China',
    'chipre': 'Cyprus',
    'colômbia': 'Colombia',
    'comores': 'Comoros',
    'congo': 'Congo, Rep.',
    'coreia do norte': 'Korea, Dem. People\'s Rep.',
    'coreia do sul': 'Korea, Rep.',
    'costa do marfim': 'Cote d\'Ivoire',
    'costa rica': 'Costa Rica',
    'croácia': 'Croatia',
    'cuba': 'Cuba',
    'dinamarca': 'Denmark',
    'djibuti': 'Djibouti',
    'dominica': 'Dominica',
    'egito': 'Egypt, Arab Rep.',
    'el salvador': 'El Salvador',
    'emirados árabes unidos': 'United Arab Emirates',
    'equador': 'Ecuador',
    'eritreia': 'Eritrea',
    'eslováquia': 'Slovak Republic',
    'eslovénia': 'Slovenia',
    'espanha': 'Spain',
    'eswatini': 'Eswatini',
    'estados unidos': 'United States',
    'estónia': 'Estonia',
    'etiópia': 'Ethiopia',
    'fiji': 'Fiji',
    'filipinas': 'Philippines',
    'finlândia': 'Finland',
    'frança': 'France',
    'gabão': 'Gabon',
    'gâmbia': 'Gambia, The',
    'gana': 'Ghana',
    'geórgia': 'Georgia',
    'granada': 'Grenada',
    'grécia': 'Greece',
    'guatemala': 'Guatemala',
    'guiana': 'Guyana',
    'guiné': 'Guinea',
    'guiné-bissau': 'Guinea-Bissau',
    'guiné equatorial': 'Equatorial Guinea',
    'haiti': 'Haiti',
    'honduras': 'Honduras',
    'hungria': 'Hungary',
    'iémen': 'Yemen, Rep.',
    'índia': 'India',
    'indonésia': 'Indonesia',
    'irão': 'Iran, Islamic Rep.',
    'iraque': 'Iraq',
    'irlanda': 'Ireland',
    'islândia': 'Iceland',
    'israel': 'Israel',
    'itália': 'Italy',
    'jamaica': 'Jamaica',
    'japão': 'Japan',
    'jordânia': 'Jordan',
    'kosovo': 'Kosovo',
    'kuwait': 'Kuwait',
    'laos': 'Lao PDR',
    'lesoto': 'Lesotho',
    'letónia': 'Latvia',
    'líbano': 'Lebanon',
    'libéria': 'Liberia',
    'líbia': 'Libya',
    'liechtenstein': 'Liechtenstein',
    'lituânia': 'Lithuania',
    'luxemburgo': 'Luxembourg',
    'macedónia do norte': 'North Macedonia',
    'madagáscar': 'Madagascar',
    'malásia': 'Malaysia',
    'maláui': 'Malawi',
    'maldivas': 'Maldives',
    'mali': 'Mali',
    'malta': 'Malta',
    'marrocos': 'Morocco',
    'maurícia': 'Mauritius',
    'mauritânia': 'Mauritania',
    'méxico': 'Mexico',
    'mianmar': 'Myanmar',
    'micronésia': 'Micronesia, Fed. Sts.',
    'moldávia': 'Moldova',
    'mónaco': 'Monaco',
    'mongólia': 'Mongolia',
    'montenegro': 'Montenegro',
    'moçambique': 'Mozambique',
    'namíbia': 'Namibia',
    'nauru': 'Nauru',
    'nepal': 'Nepal',
    'nicarágua': 'Nicaragua',
    'níger': 'Niger',
    'nigéria': 'Nigeria',
    'noruega': 'Norway',
    'nova zelândia': 'New Zealand',
    'omã': 'Oman',
    'países baixos': 'Netherlands',
    'palau': 'Palau',
    'panamá': 'Panama',
    'papua-nova guiné': 'Papua New Guinea',
    'paquistão': 'Pakistan',
    'paraguai': 'Paraguay',
    'peru': 'Peru',
    'polónia': 'Poland',
    'portugal': 'Portugal',
    'quénia': 'Kenya',
    'quirguistão': 'Kyrgyz Republic',
    'reino unido': 'United Kingdom',
    'inglaterra': 'United Kingdom',
    'england': 'United Kingdom',
    'república centro-africana': 'Central African Republic',
    'república democrática do congo': 'Congo, Dem. Rep.',
    'república dominicana': 'Dominican Republic',
    'roménia': 'Romania',
    'ruanda': 'Rwanda',
    'rússia': 'Russian Federation',
    'samoa': 'Samoa',
    'santa lúcia': 'St. Lucia',
    'são cristóvão e neves': 'St. Kitts and Nevis',
    'são marino': 'San Marino',
    'são tomé e príncipe': 'Sao Tome and Principe',
    'são vicente e granadinas': 'St. Vincent and the Grenadines',
    'seicheles': 'Seychelles',
    'senegal': 'Senegal',
    'serra leoa': 'Sierra Leone',
    'sérvia': 'Serbia',
    'singapura': 'Singapore',
    'síria': 'Syrian Arab Republic',
    'somália': 'Somalia',
    'sri lanka': 'Sri Lanka',
    'sudão': 'Sudan',
    'sudão do sul': 'South Sudan',
    'suécia': 'Sweden',
    'suíça': 'Switzerland',
    'suriname': 'Suriname',
    'tailândia': 'Thailand',
    'taiwan': 'Taiwan, China',
    'tajiquistão': 'Tajikistan',
    'tanzânia': 'Tanzania',
    'timor-leste': 'Timor-Leste',
    'togo': 'Togo',
    'tonga': 'Tonga',
    'trinidad e tobago': 'Trinidad and Tobago',
    'tunísia': 'Tunisia',
    'turquemenistão': 'Turkmenistan',
    'turquia': 'Turkey',
    'tuvalu': 'Tuvalu',
    'ucrânia': 'Ukraine',
    'uganda': 'Uganda',
    'uruguai': 'Uruguay',
    'usbequistão': 'Uzbekistan',
    'vanuatu': 'Vanuatu',
    'vaticano': 'Holy See',
    'venezuela': 'Venezuela, RB',
    'vietname': 'Vietnam',
    'zâmbia': 'Zambia',
    'zimbabué': 'Zimbabwe',
    // Aliases comuns
    'eua': 'United States',
    'usa': 'United States',
    'uk': 'United Kingdom',
    'france': 'France',
    'macau': 'Macao SAR, China'
  };
  
  // Tenta com mapeamento primeiro
  const mappedName = nameMapping[normalizedName];
  if (mappedName) {
    const country = database.find(c => c.name === mappedName);
    if (country && country.latitude && country.longitude) {
      return {
        name: normalizeCountryLabel(country.name),
        latitude: country.latitude,
        longitude: country.longitude,
        capitalCity: country.capitalCity
      };
    }
  }
  
  // Busca direta (case-insensitive)
  const country = database.find(c => 
    c.name && c.name.toLowerCase() === normalizedName
  );
  
  if (country && country.latitude && country.longitude) {
    return {
      name: normalizeCountryLabel(country.name),
      latitude: country.latitude,
      longitude: country.longitude,
      capitalCity: country.capitalCity
    };
  }
  
  // Busca parcial (contém o nome)
  const partialMatch = database.find(c => 
    c.name && (
      c.name.toLowerCase().includes(normalizedName) ||
      normalizedName.includes(c.name.toLowerCase())
    )
  );
  
  if (partialMatch && partialMatch.latitude && partialMatch.longitude) {
    return {
      name: normalizeCountryLabel(partialMatch.name),
      latitude: partialMatch.latitude,
      longitude: partialMatch.longitude,
      capitalCity: partialMatch.capitalCity
    };
  }
  
  return null;
}

/**
 * Converte dados do Google Sheets para o formato esperado pela aplicação
 * Extrai países das colunas "País 1", "País 2", "País 3" e busca coordenadas
 * @param {Array} sheetData - Dados brutos do Google Sheets
 * @returns {Promise<Object>} Dados formatados com countries e connections
 */
async function convertSheetDataToAppFormat(sheetData) {
  console.log('🔄 Convertendo dados do Google Sheets para formato da aplicação (PS1)...');

  // Carrega banco de dados de países
  const countriesDB = await loadCountriesDatabase();
  console.log(`📚 Banco de dados carregado: ${countriesDB.length} países`);

  const sampleRow = sheetData[0] || {};
  const columnNames = Object.keys(sampleRow);

  // Encontra a coluna "Chave de Procura"
  const chaveCol = columnNames.find(col => /^chave\s*de\s*procura$/i.test((col || '').toString().trim())) || 'Chave de Procura';

  console.log('🗺️ Colunas detectadas no PS1:', columnNames.slice(0, 10), '...');
  console.log(`   - Chave de Procura: "${chaveCol}" (índice: ${columnNames.indexOf(chaveCol)})`);

  // SEMPRE busca países do PaísesSoldadura (coluna "País")
  console.log('📍 Buscando países de destino do separador PaísesSoldadura...');
  
  const countries = [];
  const normalizedPortugalConnections = [];
  
  try {
    const PAISES_SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent('PaísesSoldadura')}`;
    const response = await fetch(PAISES_SHEET_URL);
    const text = await response.text();
    const jsonString = text.substring(47, text.length - 2);
    const json = JSON.parse(jsonString);
    
    const headers = json.table.cols.map(c => (c.label || c.id || '').toString().trim());
    let paisIdx = headers.findIndex(h => /pa[ií]s$/i.test(h));
    if (paisIdx === -1) paisIdx = 0;
    
    const destinationCountries = [];
    json.table.rows.forEach(row => {
      const cell = row.c[paisIdx];
      const val = cell ? cell.v : null;
      if (val && String(val).trim() !== '' && String(val).trim().toLowerCase() !== 'país') {
        destinationCountries.push(String(val).trim());
      }
    });
    
    console.log(`📍 Encontrados ${destinationCountries.length} países em PaísesSoldadura:`, destinationCountries);
    
    // Busca coordenadas e cria conexões Portugal → destino
    const uniqueCountries = new Set(['Portugal']);
    destinationCountries.forEach(countryName => {
      const coords = findCountryCoordinates(countryName, countriesDB);
      if (coords) {
        // Usa o nome ORIGINAL português (em maiúsculas) em vez do nome inglês
        const displayName = countryName.trim().toUpperCase();
        countries.push({
          name: displayName,
          latitude: coords.latitude,
          longitude: coords.longitude
        });
        normalizedPortugalConnections.push({ country: displayName, slot: 1 });
        uniqueCountries.add(displayName);
      } else {
        console.warn(`⚠️ País não encontrado no banco de dados: ${countryName}`);
      }
    });
    
    // Garante que Portugal está na lista (origem)
    const hasPortugal = countries.some(c => c.name === 'PORTUGAL');
    if (!hasPortugal) {
      const portugalCoords = findCountryCoordinates('Portugal', countriesDB);
      if (portugalCoords) {
        countries.push({
          name: 'PORTUGAL',
          latitude: portugalCoords.latitude,
          longitude: portugalCoords.longitude
        });
        console.log('✅ Portugal adicionado automaticamente como origem');
      }
    }
    
  } catch (error) {
    console.error('❌ Erro ao buscar PaísesSoldadura:', error);
  }

  const connections = {};
  if (normalizedPortugalConnections.length > 0) {
    connections['Portugal'] = normalizedPortugalConnections;
  }

  console.log(`✅ Conversão completa: ${countries.length} países mapeados, Portugal conectado a ${normalizedPortugalConnections.length} destinos`);

  return { countries, connections };
}

/**
 * Função principal que carrega os dados do Google Sheets e atualiza o objeto global 'data'
 * @returns {Promise<Object>} Objeto com countries e connections
 */
async function loadAndApplyGoogleSheetData() {
  try {
    console.log('📊 Iniciando carregamento de dados do Google Sheets...');
    
    // Carrega os dados brutos
    const rawData = await loadGoogleSheetData();
    
    // Converte para o formato da aplicação (agora é async)
    const { countries, connections } = await convertSheetDataToAppFormat(rawData);
    
    // Atualiza o objeto global 'data'
    if (typeof data !== 'undefined') {
      data.countries = countries;

      // If conversion produced Portugal connections, apply them.
      // Otherwise keep any existing connections (fallback to previously loaded PSMulti).
      if (connections && connections.Portugal && connections.Portugal.length > 0) {
        data.connections = connections;
        console.log('✅ Dados globais atualizados (com novas conexões):', {
          countries: data.countries.length,
          connectionsCount: data.connections.Portugal.length
        });
        console.log('🔗 Portugal connections:', data.connections.Portugal);
      } else {
        console.warn('⚠ Conversão não produziu conexões para Portugal. Mantendo conexões existentes (se houver).');
        if (!data.connections || !data.connections.Portugal) {
          console.warn('⚠ Não existem conexões anteriores disponíveis. O mapa pode não mostrar linhas.');
        } else {
          console.log('ℹ Utilizando conexões previamente carregadas:', data.connections.Portugal.length);
        }
      }

      // Update destination card with new connection data
      if (typeof updateDestination === 'function') {
        await updateDestination();
      }
    } else {
      console.warn('⚠ Objeto global "data" não encontrado');
    }
    
    return { countries, connections };
    
  } catch (error) {
    console.error('❌ Erro ao carregar e aplicar dados:', error);
    console.error('🔄 Mantendo dados estáticos originais');
    throw error;
  }
}

// Exporta as funções
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    loadGoogleSheetData, 
    convertSheetDataToAppFormat,
    loadAndApplyGoogleSheetData 
  };
}
