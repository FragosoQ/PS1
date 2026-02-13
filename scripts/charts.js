/**
 * Maps Portuguese country names to English for display
 * @param {string} countryNamePT - Country name in Portuguese
 * @returns {string} Country name in English
 */
const mapCountryToEnglish = (countryNamePT) => {
    const ptToEn = {
        'FRANÇA': 'FRANCE',
        'CROÁCIA': 'CROATIA',
        'ALEMANHA': 'GERMANY',
        'ESPANHA': 'SPAIN',
        'ITÁLIA': 'ITALY',
        'ITALIA': 'ITALY',
        'PORTUGAL': 'PORTUGAL',
        'BRASIL': 'BRAZIL',
        'ARGENTINA': 'ARGENTINA',
        'CHILE': 'CHILE',
        'MÉXICO': 'MEXICO',
        'COLÔMBIA': 'COLOMBIA',
        'PERU': 'PERU',
        'VENEZUELA': 'VENEZUELA',
        'EQUADOR': 'ECUADOR',
        'BOLÍVIA': 'BOLIVIA',
        'PARAGUAI': 'PARAGUAY',
        'URUGUAI': 'URUGUAY',
        'REINO UNIDO': 'UK',
        'INGLATERRA': 'UK',
        'UK': 'UK',
        'UNITED KINGDOM': 'UK',
        'ESTADOS UNIDOS': 'UNITED STATES',
        'USA': 'UNITED STATES',
        'EUA': 'UNITED STATES',
        'CANADÁ': 'CANADA',
        'AUSTRÁLIA': 'AUSTRALIA',
        'ÁUSTRIA': 'AUSTRIA',
        'BÉLGICA': 'BELGIUM',
        'BIELORRÚSSIA': 'BELARUS',
        'BULGÁRIA': 'BULGARIA',
        'CHIPRE': 'CYPRUS',
        'CHÉQUIA': 'CZECH REPUBLIC',
        'DINAMARCA': 'DENMARK',
        'ESLOVÁQUIA': 'SLOVAKIA',
        'ESLOVÉNIA': 'SLOVENIA',
        'ESTÓNIA': 'ESTONIA',
        'FINLÂNDIA': 'FINLAND',
        'GRÉCIA': 'GREECE',
        'HUNGRIA': 'HUNGARY',
        'IRLANDA': 'IRELAND',
        'ISLÂNDIA': 'ICELAND',
        'LETÓNIA': 'LATVIA',
        'LITUÂNIA': 'LITHUANIA',
        'LUXEMBURGO': 'LUXEMBOURG',
        'MALTA': 'MALTA',
        'PAÍSES BAIXOS': 'NETHERLANDS',
        'PAISES BAIXOS': 'NETHERLANDS',
        'NORUEGA': 'NORWAY',
        'POLÓNIA': 'POLAND',
        'POLONIA': 'POLAND',
        'ROMÉNIA': 'ROMANIA',
        'RÚSSIA': 'RUSSIA',
        'SUÉCIA': 'SWEDEN',
        'SUÍÇA': 'SWITZERLAND',
        'SUIÇA': 'SWITZERLAND',
        'UCRÂNIA': 'UKRAINE',
        'SÉRVIA': 'SERBIA',
        'BÓSNIA E HERZEGOVINA': 'BOSNIA AND HERZEGOVINA',
        'MONTENEGRO': 'MONTENEGRO',
        'MACEDÓNIA DO NORTE': 'NORTH MACEDONIA',
        'ALBÂNIA': 'ALBANIA',
        'KOSOVO': 'KOSOVO',
        'CHINA': 'CHINA',
        'JAPÃO': 'JAPAN',
        'COREIA DO SUL': 'SOUTH KOREA',
        'COREIA DO NORTE': 'NORTH KOREA',
        'ÍNDIA': 'INDIA',
        'INDONÉSIA': 'INDONESIA',
        'TAILÂNDIA': 'THAILAND',
        'TAILANDIA': 'THAILAND',
        'VIETNAME': 'VIETNAM',
        'FILIPINAS': 'PHILIPPINES',
        'SINGAPURA': 'SINGAPORE',
        'MALÁSIA': 'MALAYSIA',
        'TAIWAN': 'TAIWAN',
        'MONGÓLIA': 'MONGOLIA',
        'CAZAQUISTÃO': 'KAZAKHSTAN',
        'USBEQUISTÃO': 'UZBEKISTAN',
        'UZBEQUISTÃO': 'UZBEKISTAN',
        'PAQUISTÃO': 'PAKISTAN',
        'BANGLADEXE': 'BANGLADESH',
        'AFEGANISTÃO': 'AFGHANISTAN',
        'IRÃO': 'IRAN',
        'IRAQUE': 'IRAQ',
        'SÍRIA': 'SYRIA',
        'TURQUIA': 'TURKEY',
        'ISRAEL': 'ISRAEL',
        'ARÁBIA SAUDITA': 'SAUDI ARABIA',
        'SAUDI ARABIA': 'SAUDI ARABIA',
        'EMIRADOS ÁRABES UNIDOS': 'UAE',
        'QATAR': 'QATAR',
        'KUWAIT': 'KUWAIT',
        'OMÃ': 'OMAN',
        'IÉMEN': 'YEMEN',
        'JORDÂNIA': 'JORDAN',
        'LÍBANO': 'LEBANON',
        'DUBAI': 'DUBAI',
        'EGITO': 'EGYPT',
        'EGIPTO': 'EGYPT',
        'MARROCOS': 'MOROCCO',
        'ARGÉLIA': 'ALGERIA',
        'TUNÍSIA': 'TUNISIA',
        'LÍBIA': 'LIBYA',
        'SUDÃO': 'SUDAN',
        'ETIÓPIA': 'ETHIOPIA',
        'QUÉNIA': 'KENYA',
        'TANZÂNIA': 'TANZANIA',
        'UGANDA': 'UGANDA',
        'RUANDA': 'RWANDA',
        'NIGÉRIA': 'NIGERIA',
        'GANA': 'GHANA',
        'SENEGAL': 'SENEGAL',
        'COSTA DO MARFIM': 'IVORY COAST',
        'CAMARÕES': 'CAMEROON',
        'ANGOLA': 'ANGOLA',
        'MOÇAMBIQUE': 'MOZAMBIQUE',
        'ZIMBABUÉ': 'ZIMBABWE',
        'ZÂMBIA': 'ZAMBIA',
        'BOTSUANA': 'BOTSWANA',
        'NAMÍBIA': 'NAMIBIA',
        'ÁFRICA DO SUL': 'SOUTH AFRICA',
        'MADAGÁSCAR': 'MADAGASCAR',
        'MAURÍCIA': 'MAURITIUS',
        'SEICHELES': 'SEYCHELLES',
        'CABO VERDE': 'CAPE VERDE',
        'SÃO TOMÉ E PRÍNCIPE': 'SÃO TOMÉ AND PRÍNCIPE',
        'GUINÉ-BISSAU': 'GUINEA-BISSAU',
        'GUINÉ EQUATORIAL': 'EQUATORIAL GUINEA',
        'REPÚBLICA DOMINICANA': 'DOMINICAN REPUBLIC',
        'REP. DOMINICANA': 'DOMINICAN REPUBLIC',
        'CUBA': 'CUBA',
        'GUATEMALA': 'GUATEMALA',
        'HONDURAS': 'HONDURAS',
        'EL SALVADOR': 'EL SALVADOR',
        'NICARÁGUA': 'NICARAGUA',
        'COSTA RICA': 'COSTA RICA',
        'PANAMÁ': 'PANAMA',
        'HAITI': 'HAITI',
        'JAMAICA': 'JAMAICA',
        'BARBADOS': 'BARBADOS',
        'TRINIDAD E TOBAGO': 'TRINIDAD AND TOBAGO',
        'BAHAMAS': 'BAHAMAS',
        'BELIZE': 'BELIZE',
        'GUIANA': 'GUYANA',
        'SURINAME': 'SURINAME',
        'NOVA ZELÂNDIA': 'NEW ZEALAND',
        'FIJI': 'FIJI',
        'PAPUA-NOVA GUINÉ': 'PAPUA NEW GUINEA',
        'SAMOA': 'SAMOA',
        'TONGA': 'TONGA',
        'VANUATU': 'VANUATU'
    };
    
    const normalized = countryNamePT.trim().toUpperCase();
    return ptToEn[normalized] || countryNamePT.toUpperCase();
};
/**
 * Draws a text value and a small donut chart stacked in the same card
 */
const drawTextWithDonut = (containerId, text, percentage, textFontSize = 'clamp(34px, 5vw, 58px)', fillColor = '#52C41A', cornerText = '') => {
    const container = d3.select(containerId).select('.card-chart');
    container.html('');

    const containerNode = container.node();
    if (!containerNode) return;

    // Main wrapper: column layout
    const main = container.append('div')
        .style('display', 'flex')
        .style('flex-direction', 'column')
        .style('align-items', 'center')
        .style('justify-content', 'center')
        .style('width', '100%')
        .style('height', '100%')
        .style('box-sizing', 'border-box')
        .style('gap', '6px')
        .style('padding', '8px')
        .style('position', 'relative');

    if (cornerText && String(cornerText).trim() !== '') {
        const cornerLabel = String(cornerText).trim().replace(/,/g, '.');
        main.append('div')
            .attr('class', 'next-priority-label')
            .style('position', 'absolute')
            .style('top', '6px')
            .style('right', '8px')
            .style('font-size', 'clamp(22px, 1.4vw, 24px)')
            .style('font-weight', '700')
            .style('color', 'rgba(255, 255, 255, 0.95)')
            .style('padding', '4px 6px')
            .style('border-radius', '6px')
            .style('text-transform', 'uppercase')
            .style('letter-spacing', '0.04em')
            .style('text-align', 'right')
            .style('max-width', '55%')
            .style('overflow', 'hidden')
            .style('text-overflow', 'ellipsis')
            .style('white-space', 'nowrap')
                .html(`<span class="separator-icon material-symbols-outlined" aria-hidden="true">double_arrow</span>${cornerLabel}`);
    }

    // Text area
    main.append('div')
        .style('width', '100%')
        .style('text-align', 'center')
        .append('span')
            .style('font-size', textFontSize)
            .style('font-weight', 'bold')
            .style('color', 'white')
            .style('display', 'inline-block')
            .style('line-height', '1.1')
            .style('white-space', 'normal')
            .style('word-break', 'break-word')
            .style('max-width', '100%')
            .text(String(text).trim());

    // Horizontal bar container
    const barContainer = main.append('div')
        .style('width', '90%')
        .style('height', '40%')
        .style('display', 'flex')
        .style('flex-direction', 'column')
        .style('align-items', 'center')
        .style('justify-content', 'center')
        .style('gap', '8px');

    // Background bar (empty)
    barContainer.append('div')
        .style('width', '100%')
        .style('height', '12px')
        .style('background-color', 'rgba(255, 255, 255, 0.15)')
        .style('border-radius', '6px')
        .style('overflow', 'hidden')
        .style('position', 'relative')
        .append('div')
            .style('height', '100%')
            .style('width', `${percentage}%`)
            .style('background', `linear-gradient(90deg, ${d3.rgb(fillColor).brighter(0.8)}, ${fillColor})`)
            .style('border-radius', '6px')
            .style('transition', 'width 0.5s ease');

    // Percentage text
    barContainer.append('span')
        .style('font-size', 'clamp(12px, 1.5vw, 16px)')
        .style('font-weight', 'bold')
        .style('color', fillColor)
        .text(`${percentage.toFixed(0)}%`);
};

// Configuration for charts
const chartConfig = {
    colors: {
        chart1: '#4b8cf2',
        chart2: '#4b8cf2',
        chart3: '#4b8cf2',
        chart4: '#4b8cf2',
        chart5: '#4b8cf2',
        chart6: '#4b8cf2',
        chart7: '#4b8cf2',
        chart8: '#4b8cf2',
        // Cores para múltiplos slots (todas azuis)
        slotColors: [
            '#4b8cf2',
            '#4b8cf2',
            '#4b8cf2',
            '#4b8cf2',
            '#4b8cf2',
            '#4b8cf2',
            '#4b8cf2',
            '#4b8cf2'
        ]
    },
    spreadsheetId: '1GQUB52a2gKR429bjqJrNkbP5rjR7Z_4v85z9M7_Cr8Y',
    sheetName: 'PS1',
    // Destination countries come from a separate sheet (PaísesSoldadura, column "País")
    destinationSheetName: 'PaísesSoldadura',
    posto: 1, // Posto number (line to read: posto 1 = line 2, posto 2 = line 3, etc.)
    columns: {
        chart1: 'O',  // CUBA
        chart2: 'Q',  // INTERIOR
        chart3: null, // TESTES - não existe
        chart4: 'R',  // ENVOLVENTES
        chart5: 'P',  // ESTRUTURA
        chart6: null, // ÁREA TÉCNICA - não existe
        chart7: 'CI', // PRIORIDADE ATIVA (Posto 1)
        chart8: 'CG'  // PERCENTAGEM
    }
};

/**
 * Fetches all rows from PSMulti sheet to detect slots
 */
const fetchAllSlotsData = async () => {
    const SHEET_URL = `https://docs.google.com/spreadsheets/d/${chartConfig.spreadsheetId}/gviz/tq?tqx=out:json&sheet=${chartConfig.sheetName}`;

    try {
        const response = await fetch(SHEET_URL);
        const text = await response.text();
        
        // Remove o prefixo do Google
        const jsonString = text.substring(47, text.length - 2);
        const json = JSON.parse(jsonString);
        
        const rows = json.table.rows;
        const slotRows = [];
        
        // Procura por linhas com "Slot_X_Em Curso" (X = 1 a 8) na coluna A (Chave de Procura - índice 0)
        rows.forEach((row, index) => {
            const chaveCell = row.c[0]; // Coluna A (Chave de Procura - índice 0)
            const chaveValue = chaveCell ? chaveCell.v : null;
            const loteCell = row.c[36]; // Coluna AK (Lote1 - índice 36)
            const loteValue = loteCell ? loteCell.v : null;
            
            if (chaveValue && typeof chaveValue === 'string') {
                // Procura por padrão "Slot_X_Em Curso" onde X é um número de 1 a 8
                const slotMatch = chaveValue.match(/Slot_(\d+)_Em Curso/);
                if (slotMatch) {
                    const slotNumber = parseInt(slotMatch[1], 10);
                    // Valida que o número está entre 1 e 8
                    if (slotNumber >= 1 && slotNumber <= 8) {
                        slotRows.push({ 
                            slotNumber: slotNumber, 
                            rowIndex: index + 2, 
                            loteId: loteValue, 
                            chave: chaveValue 
                        });
                    }
                }
            }
        });
        
        return slotRows;

    } catch (error) {
        console.error('Error fetching slots data:', error);
        return [];
    }
};

/**
 * Fetches percentage value from Google Sheets PSMulti for a specific row and column
 */
const fetchPercentage = async (columnName, rowNumber) => {
    const SHEET_URL = `https://docs.google.com/spreadsheets/d/${chartConfig.spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${chartConfig.sheetName}&range=${columnName}${rowNumber}`;

    try {
        const response = await d3.text(SHEET_URL);
        
        let rawValue = response.split('\n')[1]?.trim(); 

        if (!rawValue) {
            rawValue = response.split('\n')[0]?.trim(); 
        }

        if (!rawValue) {
            console.warn(`Empty data or unexpected format for column ${columnName}.`);
            return 0;
        }

        rawValue = rawValue.replace(/"/g, ''); 
        rawValue = rawValue.replace(',', '.'); 
        const numericMatch = rawValue.match(/^-?\d+(\.\d+)?/); 
        
        if (numericMatch) {
            const parsedValue = parseFloat(numericMatch[0]);
            
            if (!isNaN(parsedValue)) {
                return Math.min(100, Math.max(0, parsedValue));
            }
        }
        
        console.warn(`Non-numeric value found in column ${columnName}: "${rawValue}". Using 0% as fallback.`);
        return 0;

    } catch (error) {
        console.error(`Error fetching data from column ${columnName}:`, error);
        return 0; 
    }
};

/**
 * Fetches a text value from Google Sheets (without numeric conversion)
 */
const fetchTextValue = async (columnName, rowNumber) => {
    const SHEET_URL = `https://docs.google.com/spreadsheets/d/${chartConfig.spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${chartConfig.sheetName}&range=${columnName}${rowNumber}`;

    try {
        const response = await d3.text(SHEET_URL);
        
        let rawValue = response.split('\n')[1]?.trim(); 

        if (!rawValue) {
            rawValue = response.split('\n')[0]?.trim(); 
        }

        if (!rawValue) {
            console.warn(`Empty data or unexpected format for column ${columnName}.`);
            return '';
        }

        // Remove quotes and trim
        rawValue = rawValue.replace(/"/g, '').trim(); 
        console.log(`📝 Text value from ${columnName}${rowNumber}: "${rawValue}"`);
        return rawValue;

    } catch (error) {
        console.error(`Error fetching text data from column ${columnName}:`, error);
        return ''; 
    }
};

const columnLetterToIndex = (columnName) => {
    let index = 0;
    const normalized = String(columnName || '').toUpperCase().trim();

    for (let i = 0; i < normalized.length; i++) {
        const code = normalized.charCodeAt(i);
        if (code < 65 || code > 90) {
            return -1;
        }
        index = (index * 26) + (code - 64);
    }

    return index - 1;
};

const parsePercentageValue = (rawValue) => {
    if (rawValue === null || rawValue === undefined) {
        return null;
    }

    const normalized = String(rawValue)
        .replace(/"/g, '')
        .replace('%', '')
        .replace(',', '.')
        .trim();

    if (normalized === '') {
        return null;
    }

    const numericMatch = normalized.match(/^-?\d+(\.\d+)?/);
    if (!numericMatch) {
        return null;
    }

    const value = parseFloat(numericMatch[0]);
    return Number.isNaN(value) ? null : value;
};

const normalizePriorityKey = (value) => {
    if (value === null || value === undefined) {
        return '';
    }

    return String(value)
        .trim()
        .toUpperCase()
        .replace(/\s+/g, '_')
        .replace(/-+/g, '_');
};

const fetchPriorityPercentageForLabel = async (label) => {
    const key = normalizePriorityKey(label);
    if (!key) {
        return null;
    }

    const candidateKeys = [key];
    if (/^\d+(?:_\d+)?$/.test(key)) {
        candidateKeys.push(`P${key}`);
    }
    if (/^P\d+/.test(key)) {
        candidateKeys.push(key.replace(/^P/, ''));
    }

    const SHEET_URL = `https://docs.google.com/spreadsheets/d/${chartConfig.spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${chartConfig.sheetName}&range=AL1:CE2`;

    try {
        const response = await d3.text(SHEET_URL);
        const rows = d3.csvParseRows(response).filter(row => row.length > 0);

        if (rows.length < 2) {
            console.warn('Priority percent range AL1:CE2 returned no data.');
            return null;
        }

        const headers = rows[0];
        const values = rows[1];

        for (let i = 0; i < headers.length - 1; i++) {
            const headerKey = normalizePriorityKey(headers[i]);
            if (!candidateKeys.includes(headerKey)) {
                continue;
            }

            const nextHeader = normalizePriorityKey(headers[i + 1]);
            if (nextHeader !== '%') {
                continue;
            }

            const parsed = parsePercentageValue(values[i + 1]);
            return parsed === null ? null : Math.min(100, Math.max(0, parsed));
        }

        return null;
    } catch (error) {
        console.error('Error fetching priority percent range AL1:CE2:', error);
        return null;
    }
};

const parseSheetDate = (rawValue) => {
    if (rawValue === null || rawValue === undefined) {
        return null;
    }

    if (typeof rawValue === 'number' && Number.isFinite(rawValue)) {
        const base = Date.UTC(1899, 11, 30);
        return new Date(base + rawValue * 86400000);
    }

    const normalized = String(rawValue).replace(/"/g, '').trim();
    if (normalized === '') {
        return null;
    }

    const parsed = Date.parse(normalized);
    if (!Number.isNaN(parsed)) {
        return new Date(parsed);
    }

    const parts = normalized.split(/[\/\-]/).map(part => part.trim());
    if (parts.length === 3) {
        let day = parseInt(parts[0], 10);
        let month = parseInt(parts[1], 10);
        let year = parseInt(parts[2], 10);

        if (month > 12 && day <= 12) {
            const swap = day;
            day = month;
            month = swap;
        }

        if (year < 100) {
            year += 2000;
        }

        if (!Number.isNaN(day) && !Number.isNaN(month) && !Number.isNaN(year)) {
            return new Date(Date.UTC(year, month - 1, day));
        }
    }

    return null;
};

const diffDays = (startDate, endDate) => {
    if (!startDate || !endDate) {
        return null;
    }

    const start = Date.UTC(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate());
    const end = Date.UTC(endDate.getUTCFullYear(), endDate.getUTCMonth(), endDate.getUTCDate());
    const value = Math.round((end - start) / 86400000);
    return Number.isNaN(value) ? null : value;
};

const addDaysUtc = (dateValue, daysToAdd) => {
    if (!dateValue || !Number.isFinite(daysToAdd)) {
        return null;
    }

    return new Date(dateValue.getTime() + (daysToAdd * 86400000));
};

const fetchColumnValuesWithRowIndex = async (columnName) => {
    const columnIndex = columnLetterToIndex(columnName);
    if (columnIndex < 0) {
        console.warn(`Invalid column name: ${columnName}`);
        return [];
    }

    const SHEET_URL = `https://docs.google.com/spreadsheets/d/${chartConfig.spreadsheetId}/gviz/tq?tqx=out:json&sheet=${chartConfig.sheetName}`;

    try {
        const response = await fetch(SHEET_URL);
        const text = await response.text();
        const jsonString = text.substring(47, text.length - 2);
        const json = JSON.parse(jsonString);

        const rows = json.table.rows || [];
        return rows.map((row, index) => {
            const cell = row.c && row.c[columnIndex] ? row.c[columnIndex].v : '';
            const value = cell === null || cell === undefined ? '' : String(cell).trim();
            return {
                rowIndex: index + 2,
                value: value
            };
        });
    } catch (error) {
        console.error(`Error fetching column data from ${columnName}:`, error);
        return [];
    }
};

const fetchRangeValuesWithRowIndex = async (startColumn, endColumn) => {
    const startIndex = columnLetterToIndex(startColumn);
    const endIndex = columnLetterToIndex(endColumn);

    if (startIndex < 0 || endIndex < 0 || endIndex < startIndex) {
        console.warn(`Invalid column range: ${startColumn}:${endColumn}`);
        return [];
    }

    const SHEET_URL = `https://docs.google.com/spreadsheets/d/${chartConfig.spreadsheetId}/gviz/tq?tqx=out:json&sheet=${chartConfig.sheetName}`;

    try {
        const response = await fetch(SHEET_URL);
        const text = await response.text();
        const jsonString = text.substring(47, text.length - 2);
        const json = JSON.parse(jsonString);

        const rows = json.table.rows || [];
        return rows.map((row, index) => {
            const values = [];
            for (let col = startIndex; col <= endIndex; col++) {
                const cell = row.c && row.c[col] ? row.c[col].v : '';
                values.push(cell === null || cell === undefined ? '' : String(cell).trim());
            }
            return {
                rowIndex: index + 2,
                values
            };
        });
    } catch (error) {
        console.error(`Error fetching range data from ${startColumn}:${endColumn}:`, error);
        return [];
    }
};

const fetchRangeHeadersAndRow = async (startColumn, endColumn, rowNumber) => {
    const startIndex = columnLetterToIndex(startColumn);
    const endIndex = columnLetterToIndex(endColumn);

    if (startIndex < 0 || endIndex < 0 || endIndex < startIndex) {
        console.warn(`Invalid column range: ${startColumn}:${endColumn}`);
        return { headers: [], values: [] };
    }

    const SHEET_URL = `https://docs.google.com/spreadsheets/d/${chartConfig.spreadsheetId}/gviz/tq?tqx=out:json&sheet=${chartConfig.sheetName}`;

    try {
        const response = await fetch(SHEET_URL);
        const text = await response.text();
        const jsonString = text.substring(47, text.length - 2);
        const json = JSON.parse(jsonString);

        const headers = (json.table.cols || [])
            .slice(startIndex, endIndex + 1)
            .map(col => (col.label || col.id || '').toString().trim());

        const rowIndex = Math.max(0, rowNumber - 2);
        const row = (json.table.rows || [])[rowIndex];
        const values = [];

        if (row && row.c) {
            for (let col = startIndex; col <= endIndex; col++) {
                const cell = row.c[col] ? row.c[col].v : '';
                values.push(cell === null || cell === undefined ? '' : String(cell).trim());
            }
        }

        return { headers, values };
    } catch (error) {
        console.error(`Error fetching range headers/data from ${startColumn}:${endColumn}:`, error);
        return { headers: [], values: [] };
    }
};

/**
 * Fetches countries from PaísesSoldadura sheet (column "País")
 * Returns all non-empty values with slotNumber defaulting to 1.
 */
const fetchDestinationCountries = async () => {
    try {
        // Fetch PaísesSoldadura sheet to get the destination countries list
        const sheetName = chartConfig.destinationSheetName;
        const SHEET_URL = `https://docs.google.com/spreadsheets/d/${chartConfig.spreadsheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;
        const response = await fetch(SHEET_URL);
        const text = await response.text();
        const jsonString = text.substring(47, text.length - 2);
        const json = JSON.parse(jsonString);

        const headers = json.table.cols.map(c => (c.label || c.id || '').toString().trim());
        console.log(`Headers from sheet ${sheetName}:`, headers);

        // Find the "País" column (exact or with numbers like "País 1")
        let paisIdx = headers.findIndex(h => /pa[ií]s$/i.test(h));
        if (paisIdx === -1) {
            paisIdx = headers.findIndex(h => /pais$/i.test(h));
        }
        if (paisIdx === -1) {
            paisIdx = headers.findIndex(h => /^pa[ií]s/i.test(h));
        }
        if (paisIdx === -1) {
            paisIdx = 0; // fallback to first column if no exact match
            console.warn(`Column "País" not found in ${sheetName}. Using first column as fallback.`);
        }

        const countriesWithSlot = [];
        // Skip first row if it contains only header text
        json.table.rows.forEach((row, idx) => {
            const cell = row.c[paisIdx];
            const val = cell ? cell.v : null;
            if (val && String(val).trim() !== '' && String(val).trim().toLowerCase() !== 'país') {
                countriesWithSlot.push({ name: String(val).trim(), slotNumber: 1 });
            }
        });

        console.log(`Fetched ${countriesWithSlot.length} countries from ${sheetName}:`, countriesWithSlot);
        return countriesWithSlot;

    } catch (error) {
        console.error('Error fetching destination countries:', error);
        return [];
    }
};

/**
 * Updates destination card with countries from PaísesSoldadura
 */
const updateDestination = async () => {
    const destinationTitle = document.getElementById('destination-title');
    
    if (!destinationTitle) return;
    
    destinationTitle.textContent = 'Loading...';
    
    // Get countries from PaísesSoldadura column "País"
    const countriesWithSlot = await fetchDestinationCountries();
    
    if (countriesWithSlot.length > 0) {
        // Remove duplicates - keep first occurrence with its slot number
        const uniqueCountries = [];
        const seenCountries = new Set();
        
        countriesWithSlot.forEach(countryData => {
            const countryKey = countryData.name.toUpperCase();
            if (!seenCountries.has(countryKey)) {
                seenCountries.add(countryKey);
                uniqueCountries.push(countryData);
            }
        });
        
        destinationTitle.innerHTML = uniqueCountries
            .map(countryData => {
                const slotClass = countryData.slotNumber === 2 ? ' slot2' : '';
                const englishName = mapCountryToEnglish(countryData.name);
                return `<span class="country-tag${slotClass}">${englishName}</span>`;
            })
            .join('');
        console.log('Destination card updated with unique countries:', uniqueCountries);
    } else {
        destinationTitle.textContent = 'No destinations';
    }
};

/**
 * Draws a Donut Chart inside a container
 */
/**
 * Draws text content in a card (for non-chart data like priority)
 */
const drawTextCard = (containerId, text, fontSize = 'clamp(46px, 8vw, 64px)') => {
    const container = d3.select(containerId).select('.card-chart');
    container.html('');

    const containerNode = container.node();
    if (!containerNode) return;

    // Create a div for text display
    const div = container.append('div')
        .style('display', 'flex')
        .style('align-items', 'center')
        .style('justify-content', 'center')
        .style('width', '100%')
        .style('height', '100%')
        .style('padding', '20px')
        .style('box-sizing', 'border-box');

    div.append('span')
        .style('font-size', fontSize)
        .style('font-weight', 'bold')
        .style('color', 'white')
        .style('text-align', 'center')
        .style('word-wrap', 'break-word')
        .text(String(text).trim());
};

/**
 * Draws a donut chart in a container
 */
const drawDonutChart = (containerId, percentage, fillColor) => {
    const container = d3.select(containerId).select('.card-chart');
    container.html('');

    const containerNode = container.node();
    if (!containerNode) return;

    const rect = containerNode.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Detecta mobile
    const isMobile = window.innerWidth <= 768;
    
    // Calculate size based on available space, with minimum for mobile
    let size;
    if (isMobile) {
        // Em mobile, garante tamanho entre 70-110px para melhor visibilidade
        size = Math.max(70, Math.min(Math.min(width, height) - 8, 110));
    } else {
        // Desktop: mantém lógica original
        size = Math.min(Math.min(width, height) - 20, 150);
    }
    
    if (size <= 0) {
        console.warn(`⚠️ Chart size invalid: ${size}px (width: ${width}, height: ${height})`);
        size = 70; // Fallback para garantir que algo aparece
    }

    const radius = size / 2;
    const innerRadius = radius * 0.65;

    const arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(radius);

    const pie = d3.pie()
        .sort(null)
        .value(d => d.value)
        .startAngle(-Math.PI * 0.5) 
        .endAngle(Math.PI * 1.5); 

    const data = [
        { value: percentage, name: 'Filled' },
        { value: 100 - percentage, name: 'Empty' }
    ];

    // Generate unique ID for this chart
    const uniqueId = `chart-${Math.random().toString(36).substr(2, 9)}`;

    const svg = container.append('svg')
        .attr('width', size)
        .attr('height', size)
        .attr('viewBox', `0 0 ${size} ${size}`)
        .style('display', 'block')
        .style('margin', '0 auto')
        .append('g')
        .attr('transform', `translate(${size / 2}, ${size / 2})`);

    // Add gradient definitions
    const defs = svg.append('defs');
    
    // Radial gradient for filled portion
    const fillGradient = defs.append('radialGradient')
        .attr('id', `fill-gradient-${uniqueId}`)
        .attr('cx', '30%')
        .attr('cy', '30%');
    
    fillGradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', d3.rgb(fillColor).brighter(0.8))
        .attr('stop-opacity', 1);
    
    fillGradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', fillColor)
        .attr('stop-opacity', 1);
    
    // Radial gradient for empty portion (lighter, more glassy)
    const emptyGradient = defs.append('radialGradient')
        .attr('id', `empty-gradient-${uniqueId}`)
        .attr('cx', '30%')
        .attr('cy', '30%');
    
    emptyGradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', 'rgba(255, 255, 255, 0.3)')
        .attr('stop-opacity', 1);
    
    emptyGradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', 'rgba(255, 255, 255, 0.08)')
        .attr('stop-opacity', 1);

    const arcs = svg.selectAll('.arc')
        .data(pie(data))
        .enter()
        .append('g')
        .attr('class', 'arc');

    arcs.append('path')
        .attr('d', arc)
        .attr('fill', (d, i) => i === 0 ? `url(#fill-gradient-${uniqueId})` : `url(#empty-gradient-${uniqueId})`)
        .attr('stroke', 'none');

    // Texto percentual com tamanho adaptativo
    const fontSize = isMobile ? `${size * 0.25}px` : '1.8rem';
    
    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em') 
        .style('font-size', fontSize)
        .style('font-weight', 'bold')
        .style('fill', 'white')
        .text(`${percentage.toFixed(0)}%`);
};

/**
 * Draws multiple donut charts side by side in a container
 */
const drawMultipleDonutCharts = (containerId, chartsData) => {
    const container = d3.select(containerId).select('.card-chart');
    container.html('');

    const containerNode = container.node();
    if (!containerNode) return;

    const rect = containerNode.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Detecta mobile
    const isMobile = window.innerWidth <= 768;

    // Determine layout based on number of charts
    const isGridLayout = chartsData.length > 2;
    
    let size;
    if (isMobile) {
        // Em mobile, tamanhos aumentados para melhor visibilidade
        if (isGridLayout) {
            // Grid 2x2: cada chart entre 50-90px
            const chartWidth = (width / 2) - 6;
            const chartHeight = (height / 2) - 6;
            size = Math.max(50, Math.min(chartWidth, chartHeight, 90));
        } else {
            // Linear: 1 ou 2 charts maiores
            const chartWidth = (width / chartsData.length) - 6;
            const chartHeight = height - 8;
            size = Math.max(60, Math.min(chartWidth, chartHeight, 100));
        }
    } else {
        // Desktop: lógica original
        if (isGridLayout) {
            const chartWidth = (width / 2) - 15;
            const chartHeight = (height / 2) - 15;
            size = Math.min(chartWidth, chartHeight, 120);
        } else {
            const chartWidth = (width / chartsData.length) - 10;
            const chartHeight = height - 20;
            size = Math.min(chartWidth, chartHeight, 150);
        }
    }
    
    if (size <= 0) {
        console.warn(`⚠️ Multiple charts size invalid: ${size}px`);
        size = isMobile ? 50 : 60; // Fallback
    }

    const radius = size / 2;
    const innerRadius = radius * 0.65;

    const arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(radius);

    const pie = d3.pie()
        .sort(null)
        .value(d => d.value)
        .startAngle(-Math.PI * 0.5) 
        .endAngle(Math.PI * 1.5);

    // Create a container for all charts with conditional layout
    const mainContainer = container.append('div')
        .style('display', isGridLayout ? 'grid' : 'flex')
        .style('grid-template-columns', isGridLayout ? 'repeat(2, 1fr)' : null)
        .style('grid-template-rows', isGridLayout ? 'repeat(2, 1fr)' : null)
        .style('justify-content', 'center')
        .style('align-items', 'center')
        .style('gap', '10px')
        .style('width', '100%')
        .style('height', '100%');

    // Draw each chart
    chartsData.forEach((chartInfo, index) => {
        const chartContainer = mainContainer.append('div')
            .style('display', 'flex')
            .style('flex-direction', 'column')
            .style('align-items', 'center')
            .style('justify-content', 'center')
            .style('gap', '2px');

        const uniqueId = `chart-${Math.random().toString(36).substr(2, 9)}`;
        const fillColor = chartInfo.color;
        const percentage = chartInfo.percentage;

        const data = [
            { value: percentage, name: 'Filled' },
            { value: 100 - percentage, name: 'Empty' }
        ];

        const svg = chartContainer.append('svg')
            .attr('width', size)
            .attr('height', size)
            .attr('viewBox', `0 0 ${size} ${size}`)
            .style('display', 'block')
            .append('g')
            .attr('transform', `translate(${size / 2}, ${size / 2})`);

        // Add gradient definitions
        const defs = svg.append('defs');
        
        const fillGradient = defs.append('radialGradient')
            .attr('id', `fill-gradient-${uniqueId}`)
            .attr('cx', '30%')
            .attr('cy', '30%');
        
        fillGradient.append('stop')
            .attr('offset', '0%')
            .attr('stop-color', d3.rgb(fillColor).brighter(0.8))
            .attr('stop-opacity', 1);
        
        fillGradient.append('stop')
            .attr('offset', '100%')
            .attr('stop-color', fillColor)
            .attr('stop-opacity', 1);
        
        const emptyGradient = defs.append('radialGradient')
            .attr('id', `empty-gradient-${uniqueId}`)
            .attr('cx', '30%')
            .attr('cy', '30%');
        
        emptyGradient.append('stop')
            .attr('offset', '0%')
            .attr('stop-color', 'rgba(255, 255, 255, 0.3)')
            .attr('stop-opacity', 1);
        
        emptyGradient.append('stop')
            .attr('offset', '100%')
            .attr('stop-color', 'rgba(255, 255, 255, 0.08)')
            .attr('stop-opacity', 1);

        const arcs = svg.selectAll('.arc')
            .data(pie(data))
            .enter()
            .append('g')
            .attr('class', 'arc');

        arcs.append('path')
            .attr('d', arc)
            .attr('fill', (d, i) => i === 0 ? `url(#fill-gradient-${uniqueId})` : `url(#empty-gradient-${uniqueId})`)
            .attr('stroke', 'none');

        // Texto percentual com tamanho adaptativo baseado no size do chart
        const textSize = isMobile ? `${size * 0.28}px` : '1.8rem';
        
        svg.append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', '0.35em') 
            .style('font-size', textSize)
            .style('font-weight', 'bold')
            .style('fill', 'white')
            .text(`${percentage.toFixed(0)}%`);
    });
};

/**
 * Updates all charts with data from Google Sheets
 */
const updateAllCharts = async () => {
    const charts = [
        { id: '#grid-item-1', column: chartConfig.columns.chart1, color: chartConfig.colors.chart1, fixedRow: null },
        { id: '#grid-item-2', column: chartConfig.columns.chart2, color: chartConfig.colors.chart2, fixedRow: null },
        { id: '#grid-item-3', column: chartConfig.columns.chart3, color: chartConfig.colors.chart3, fixedRow: null },
        { id: '#grid-item-4', column: chartConfig.columns.chart4, color: chartConfig.colors.chart4, fixedRow: null },
        { id: '#grid-item-5', column: chartConfig.columns.chart5, color: chartConfig.colors.chart5, fixedRow: null },
        { id: '#grid-item-6', column: chartConfig.columns.chart6, color: chartConfig.colors.chart6, fixedRow: null },
        { id: '#grid-item-7', column: chartConfig.columns.chart7, color: chartConfig.colors.chart7, fixedRow: 2 },  // PRIORIDADE ATIVA - sempre linha 2
        { id: '#grid-item-8', column: chartConfig.columns.chart8, color: chartConfig.colors.chart8, fixedRow: 2 }   // PERCENTAGEM - sempre linha 2
    ];

    // Fetch all slots (Slot_1_Em Curso, Slot_2_Em Curso)
    const slots = await fetchAllSlotsData();

    for (const chart of charts) {
        // Skip charts with null column (não existem)
        if (chart.column === null) {
            // Hide the chart container
            d3.select(chart.id).style('display', 'none');
            continue;
        }
        
        // Se tem fixedRow definida, ler apenas dessa linha (para grid-item-7 e grid-item-8)
        if (chart.fixedRow !== null) {
            // Se é grid-item-7 (PRIORIDADE ATIVA), ler como texto
            if (chart.id === '#grid-item-7') {
                const ciRows = await fetchColumnValuesWithRowIndex('CI');
                const akRows = await fetchColumnValuesWithRowIndex('AK');
                const akByRow = new Map(akRows.map(item => [item.rowIndex, item.value]));

                const priorityValues = ciRows
                    .filter(item => String(item.value || '').trim() !== '')
                    .filter(item => {
                        const akValue = parsePercentageValue(akByRow.get(item.rowIndex));
                        return akValue !== 100;
                    })
                    .map(item => item.value);

                const textValue = priorityValues.length > 0 ? priorityValues.join(' | ') : '—';
                const textFontSize = priorityValues.length > 1
                    ? 'clamp(24px, 2.2vw, 34px)'
                    : 'clamp(94px, 5vw, 118px)';

                const nextPriority = await fetchTextValue('CH', chart.fixedRow);
                const activePriorityLabel = priorityValues.length > 0 ? priorityValues[0] : '';
                const priorityPercentage = await fetchPriorityPercentageForLabel(activePriorityLabel);
                const percentage = priorityPercentage !== null ? priorityPercentage : 0;
                // Render combined text + donut in the same card
                drawTextWithDonut(
                    chart.id,
                    textValue,
                    percentage,
                    textFontSize,
                    chartConfig.colors.chart8,
                    nextPriority
                );
            } else {
                // Caso contrário, ler como percentual numérico
                const percentage = await fetchPercentage(chart.column, chart.fixedRow);
                drawDonutChart(chart.id, percentage, chart.color);
            }
            continue;
        }
        
        if (slots.length === 0) {
            // Se não existem slots, mostrar um gráfico default (usando a primeira linha como fallback)
            const percentage = await fetchPercentage(chart.column, 2);
            // Usa a primeira cor do array slotColors (amarelo)
            drawDonutChart(chart.id, percentage, chartConfig.colors.slotColors[0]);
        } else {
            // Para qualquer número de slots (1 ou mais), desenhar múltiplos gráficos
            const chartsData = [];
            for (let i = 0; i < slots.length; i++) {
                const slot = slots[i];
                const percentage = await fetchPercentage(chart.column, slot.rowIndex);
                // Usa slotNumber-1 como índice (Slot_1 = índice 0 = amarelo, Slot_2 = índice 1 = laranja)
                const colorIndex = (slot.slotNumber - 1) % chartConfig.colors.slotColors.length;
                const color = chartConfig.colors.slotColors[colorIndex];
                chartsData.push({
                    percentage: percentage,
                    color: color,
                    loteId: slot.loteId,
                    chave: slot.chave
                });
            }
            drawMultipleDonutCharts(chart.id, chartsData);
        }
    }
};

/**
 * Initializes charts on page load and window resize
 */
const initCharts = () => {
    updateAllCharts();
    
    window.addEventListener('resize', () => {
        updateAllCharts();
    });
};

/**
 * Updates EVO progress bar (Column AK: GERAL from PS1 sheet for active slots)
 * Creates dynamic progress bars based on number of active slots
 */
const updateEvoProgress = async () => {
    try {
        // Fetch all slots (Slot_1_Em Curso, Slot_2_Em Curso, etc.)
        const slots = await fetchAllSlotsData();
        
        const progressContainer = document.querySelector('.progress-bar-container');
        
        if (!progressContainer) {
            console.error('Progress bar container not found');
            return;
        }
        
        if (slots.length === 0) {
            // No active slots, hide container
            progressContainer.style.display = 'none';
            console.log('⚠️ No active slots found');
            return;
        }
        
        // Show container
        progressContainer.style.display = 'block';
        
        // Clear existing progress bars
        progressContainer.innerHTML = '';
        
        // Create progress bar for each slot
        for (let i = 0; i < slots.length; i++) {
            const slot = slots[i];
            const SHEET_URL = `https://docs.google.com/spreadsheets/d/${chartConfig.spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${chartConfig.sheetName}&range=AK${slot.rowIndex}`;
            
            try {
                const response = await d3.text(SHEET_URL);
                let rawValue = response.split('\n')[0]?.trim().replace(/"/g, '');
                
                if (rawValue) {
                    rawValue = rawValue.replace('%', '').replace(',', '.').trim();
                    const percentage = parseFloat(rawValue);
                    
                    if (!isNaN(percentage)) {
                        const clampedPercentage = Math.min(100, Math.max(0, percentage));
                        
                        // Usa slotNumber-1 como índice (Slot_1 = índice 0 = amarelo, Slot_2 = índice 1 = laranja)
                        const colorIndex = (slot.slotNumber - 1) % chartConfig.colors.slotColors.length;
                        const color = chartConfig.colors.slotColors[colorIndex];
                        
                        // Cria wrapper para esta progress bar
                        const wrapper = document.createElement('div');
                        wrapper.className = 'progress-bar-wrapper';
                        wrapper.style.marginBottom = i < slots.length - 1 ? '8px' : '0';
                        
                        // Cria barra de progresso
                        const fillDiv = document.createElement('div');
                        fillDiv.className = 'progress-bar-fill';
                        fillDiv.style.width = `${clampedPercentage}%`;
                        fillDiv.style.background = `linear-gradient(90deg, ${color} 0%, ${d3.rgb(color).darker(0.5)} 50%, ${d3.rgb(color).darker(1)} 100%)`;
                        
                        wrapper.style.position = 'relative';
                        wrapper.appendChild(fillDiv);
                        progressContainer.appendChild(wrapper);
                        
                        console.log(`✅ Progress bar ${i + 1} updated: ${clampedPercentage}% (Column AK - GERAL, Chave: ${slot.chave}, Lote: ${slot.loteId})`);
                    }
                }
            } catch (error) {
                console.error(`Error fetching progress for slot ${i + 1}:`, error);
            }
        }
        
    } catch (error) {
        console.error('Error fetching progress from PS1 GERAL (column AK):', error);
    }
};

/**
 * Fetches planning data from Google Sheets PSMulti for active slots
 */
const fetchPlanningData = async () => {
    try {
        // Fetch all active slots
        const slots = await fetchAllSlotsData();
        
        if (slots.length === 0) {
            return { slots: [] };
        }
        
        const slotsData = [];
        
        for (const slot of slots) {
            const SHEET_URL = `https://docs.google.com/spreadsheets/d/${chartConfig.spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${chartConfig.sheetName}&range=D${slot.rowIndex}:F${slot.rowIndex}`;
            
            try {
                const response = await d3.text(SHEET_URL);
                const values = response.split('\n')[0]?.split(',').map(v => v.replace(/^"|"$/g, '').trim()) || [];
                
                slotsData.push({
                    slotNumber: slot.slotNumber,
                    lote: values[0] || '',        // Column D (LOTE) is index 0
                    quantidade: values[1] || '',  // Column E (QUANTIDADE / LOTE) is index 1
                    dataPretendida: values[2] || '' // Column F (DATA PRETENDIDA) is index 2
                });
            } catch (error) {
                console.error(`Error fetching planning data for Slot ${slot.slotNumber}:`, error);
            }
        }
        
        return { slots: slotsData };
        
    } catch (error) {
        console.error('Error fetching planning data from PSMulti:', error);
        return { slots: [] };
    }
};

/**
 * Fetches buffer data from soldaduraEditável sheet (D2:D9)
 */
const fetchBufferData = async () => {
    const SHEET_URL = `https://docs.google.com/spreadsheets/d/1GQUB52a2gKR429bjqJrNkbP5rjR7Z_4v85z9M7_Cr8Y/gviz/tq?tqx=out:csv&sheet=soldaduraEditável&range=D2:D5`;

    try {
        const response = await d3.text(SHEET_URL);
        
        // Parse CSV response - each line is a buffer item
        const lines = response.split('\n').filter(line => line.trim());
        const bufferItems = lines.map(line => line.replace(/"/g, '').trim()).filter(item => item);
        
        return bufferItems;

    } catch (error) {
        console.error('Error fetching buffer data from soldaduraEditável:', error);
        return [];
    }
};

/**
 * Fetches WIP lotes from WIP sheet (A1:B9) where GERAL is not "100%" or empty
 */
const fetchWipLotes = async () => {
    const SHEET_URL = `https://docs.google.com/spreadsheets/d/1GQUB52a2gKR429bjqJrNkbP5rjR7Z_4v85z9M7_Cr8Y/gviz/tq?tqx=out:csv&sheet=WIP&range=A1:B9`;

    try {
        const response = await d3.text(SHEET_URL);
        const lines = response.split('\n').map(line => line.trim()).filter(Boolean);

        if (lines.length === 0) {
            return [];
        }

        const rows = lines.map(line =>
            line.split(',').map(value => value.replace(/^"|"$/g, '').trim())
        );

        const headers = rows[0].map(header => header.toUpperCase());
        const loteIndex = headers.indexOf('LOTE');
        const geralIndex = headers.indexOf('GERAL');

        const resolvedLoteIndex = loteIndex === -1 ? 0 : loteIndex;
        const resolvedGeralIndex = geralIndex === -1 ? 1 : geralIndex;

        return rows
            .slice(1)
            .map(row => ({
                lote: row[resolvedLoteIndex] || '',
                geral: row[resolvedGeralIndex] || ''
            }))
            .filter(item => {
                const lote = String(item.lote).trim();
                const geral = String(item.geral).trim();
                return lote !== '' && geral !== '' && geral !== '100%';
            })
            .map(item => {
                const rawPercent = String(item.geral).replace('%', '').replace(',', '.').trim();
                const percent = Number.parseFloat(rawPercent);
                return {
                    lote: item.lote,
                    percent: Number.isFinite(percent) ? percent : 0
                };
            });
    } catch (error) {
        console.error('Error fetching WIP data:', error);
        return [];
    }
};

/**
 * Fetches status from Google Sheets PSMulti (Column AI: STATUS)
 * Verifica todos os slots ativos: se qualquer um for OFF, retorna OFF
 * Apenas se todos forem ON, retorna ON
 */
const fetchStatus = async () => {
    try {
        // Fetch all active slots
        const slots = await fetchAllSlotsData();
        
        if (slots.length === 0) {
            return 'OFF';
        }
        
        // Check status (column AI - index 34) for each slot
        const statusValues = [];
        
        for (const slot of slots) {
            const SHEET_URL = `https://docs.google.com/spreadsheets/d/${chartConfig.spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${chartConfig.sheetName}&range=AI${slot.rowIndex}`;
            
            try {
                const response = await d3.text(SHEET_URL);
                const statusValue = response.split('\n')[0]?.trim().replace(/"/g, '').toUpperCase() || 'OFF';
                statusValues.push(statusValue);
            } catch (error) {
                console.error(`Error fetching status for slot ${slot.slotNumber}:`, error);
                statusValues.push('OFF'); // Default to OFF on error
            }
        }
        
        // Se pelo menos um for ON, retorna ON
        // Se todos forem OFF, retorna OFF
        const hasOn = statusValues.some(status => status === 'ON');
        const result = hasOn ? 'ON' : 'OFF';
        
        console.log(`📊 Status check - Slots: ${statusValues.join(', ')} → Result: ${result}`);
        return result;

    } catch (error) {
        console.error('Error fetching status from PSMulti:', error);
        return 'OFF';
    }
};

/**
 * Fetches GOAL chart data from Google Sheets PS1
 * Uses columns DL (Dias Prazo), DM (Folga), DN (Dias Usados)
 */
const fetchGoalData = async () => {
    try {
        // Fetch all active slots
        const slots = await fetchAllSlotsData();
        
        if (slots.length === 0) {
            return { diasPrazo: 0, diasPrazoExtra: 0, diasUsados: 0, folga: 0 };
        }
        
        let totalDiasPrazo = 0;
        let totalDiasUsados = 0;
        let totalFolga = 0;
        let validSlots = 0;
        
        // Fetch data for each slot and sum values
        for (const slot of slots) {
            const SHEET_URL = `https://docs.google.com/spreadsheets/d/${chartConfig.spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${chartConfig.sheetName}&range=DL${slot.rowIndex}:DN${slot.rowIndex}`;
            
            try {
                const response = await d3.text(SHEET_URL);
                const values = response.split('\n')[0]?.split(',').map(v => v.replace(/^"|"$/g, '').trim()) || [];
                
                const diasPrazoFromColumns = parseFloat(values[0]) || 0;   // Column DL (index 0)
                const folgaFromColumns = parseFloat(values[1]) || 0;       // Column DM (index 1)
                const diasUsadosFromColumns = parseFloat(values[2]) || 0;  // Column DN (index 2)

                totalDiasPrazo += diasPrazoFromColumns;
                totalFolga += folgaFromColumns;
                totalDiasUsados += diasUsadosFromColumns;
                validSlots++;

                console.log(`📊 GOAL Slot ${slot.slotNumber}: Prazo=${diasPrazoFromColumns}, Folga=${folgaFromColumns}, Usados=${diasUsadosFromColumns}`);
            } catch (error) {
                console.error(`Error fetching GOAL data for slot ${slot.slotNumber}:`, error);
            }
        }
        
        // Calculate averages
        const avgDiasPrazo = validSlots > 0 ? totalDiasPrazo / validSlots : 0;
        const avgDiasUsados = validSlots > 0 ? totalDiasUsados / validSlots : 0;
        const avgFolga = validSlots > 0 ? totalFolga / validSlots : 0;
        const avgDiasPrazoExtra = 0;
        
        console.log(`📊 GOAL Averages: Prazo=${avgDiasPrazo.toFixed(1)}, Usados=${avgDiasUsados.toFixed(1)}, Folga=${avgFolga.toFixed(1)}`);
        
        return {
            diasPrazo: avgDiasPrazo,
            diasPrazoExtra: avgDiasPrazoExtra,
            diasUsados: avgDiasUsados,
            folga: avgFolga
        };

    } catch (error) {
        console.error('Error fetching GOAL data from PSMulti:', error);
        return { diasPrazo: 0, diasPrazoExtra: 0, diasUsados: 0, folga: 0 };
    }
};

/**
 * Fetches info panel data from Google Sheets PM1
 */
const fetchInfoPanelData = async () => {
    const row = chartConfig.posto + 1; // posto 1 = row 2, posto 2 = row 3, etc.
    const SHEET_URL = `https://docs.google.com/spreadsheets/d/${chartConfig.spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${chartConfig.sheetName}&range=A${row}:AN${row}`;

    try {
        const response = await d3.text(SHEET_URL);
        console.log('PM1 info panel response:', response);
        
        // Parse CSV response
        const values = response.split('\n')[0]?.split(',').map(v => v.replace(/^"|"$/g, '').trim()) || [];
        
        return {
            lote: values[36] || '',  // Column AK is index 36 (Lote)
            e: values[4] || '',      // Column E is index 4
            i: values[8] || '',      // Column I is index 8
            x: values[23] || '',     // Column X is index 23
            o: values[14] || '',     // Column O is index 14
            status: values[34] || '', // Column AI is index 34 (STATUS)
            diasPrazo: parseFloat(values[37]) || 0,   // Column AL is index 37 (Dias Prazo)
            diasUsados: parseFloat(values[38]) || 0,  // Column AM is index 38 (Dias Usados)
            folga: parseFloat(values[39]) || 0        // Column AN is index 39 (Folga)
        };

    } catch (error) {
        console.error('Error fetching info panel data:', error);
        return { lote: '', e: '', i: '', x: '', o: '', status: '', diasPrazo: 0, diasUsados: 0, folga: 0 };
    }
};

/**
 * Updates GOAL chart with data from PM1
 */
const updateGoalChart = (diasPrazo, diasPrazoExtra, diasUsados, folga) => {
    const outerPrimary = Math.max(0, diasPrazo);
    const outerTotal = outerPrimary + 5;
    const middleTotal = Math.max(0, diasUsados) + 5;
    const outerRatio = outerTotal > 0 ? outerPrimary / outerTotal : 0;
    const middleRatio = middleTotal > 0 ? Math.max(0, diasUsados) / middleTotal : 0;

    // Determine color for middle ring (amarelo se o anel do meio ultrapassar o exterior)
    const middleColor = middleRatio > outerRatio ? '#FFD700' : (middleRatio === outerRatio ? '#9aa3ad' : '#00a2e8');
    
    // Determine color for inner ring (vermelho se Folga = 0)
    const innerColor = folga <= 0 ? '#FF0000' : '#80a5dc';
    
    // Calculate dash arrays for each circle (full circle = 2 * PI * r)
    // Outer ring: r=80, circumference = 502.65
    const outerCircumference = 2 * Math.PI * 80;
    const outerDashArray = outerTotal > 0
        ? `${(outerPrimary / outerTotal) * outerCircumference} ${outerCircumference}`
        : '0 502.65';
    
    // Middle ring: r=60, circumference = 376.99
    const middleCircumference = 2 * Math.PI * 60;
    const middleDashArray = middleTotal > 0 ? `${(Math.max(0, diasUsados) / middleTotal) * middleCircumference} ${middleCircumference}` : '0 376.99';
    
    // Inner ring: r=42, circumference = 263.89
    const innerCircumference = 2 * Math.PI * 42;
    const innerTotal = Math.max(0, folga) + 5;
    const innerDashArray = innerTotal > 0 ? `${(Math.max(0, folga) / innerTotal) * innerCircumference} ${innerCircumference}` : '0 263.89';
    
    // Update SVG circles
    const svg = document.querySelector('.goal-chart');
    if (svg) {
        const circles = svg.querySelectorAll('circle[stroke-dasharray]');
        if (circles.length >= 3) {
            // Outer circle (F - J filled, empty uses F - (J + 7 dias))
            circles[0].setAttribute('stroke-dasharray', outerDashArray);
            circles[0].setAttribute('stroke', '#007bff');
            
            // Middle circle (AM - Dias Usados)
            circles[1].setAttribute('stroke-dasharray', middleDashArray);
            circles[1].setAttribute('stroke', middleColor);
            
            // Inner circle (AN - Folga)
            circles[2].setAttribute('stroke-dasharray', innerDashArray);
            circles[2].setAttribute('stroke', innerColor);
        }
    }
};

/**
 * Updates info panel card with data
 */
const updateInfoPanel = async () => {
    const data = await fetchInfoPanelData();
    
    // Fetch planning data once (used by multiple cards)
    const planningData = await fetchPlanningData();
    
    // Update second card (info-panel-card-1) with WIP LOTE list
    const wipItems = await fetchWipLotes();
    const slotLotes = (planningData.slots || [])
        .map(slot => slot.lote)
        .filter(lote => lote && String(lote).trim() !== '')
        .slice(0, 4);
    
    const infoPanelCard1 = document.querySelector('.info-panel-content-1');
    if (infoPanelCard1) {
        if (wipItems.length > 0) {
            infoPanelCard1.innerHTML = wipItems
                .map(item => {
                    let className = 'buffer-item';
                    
                    // Check which slot matches this WIP item
                    const slotIndex = slotLotes.findIndex(lote => lote && lote === item.lote);
                    
                    if (slotIndex === 0) {
                        className += ' active'; // Slot 1 - azul
                    } else if (slotIndex === 1) {
                        className += ' active-slot2'; // Slot 2 - cinza
                    } else if (slotIndex === 2) {
                        className += ' active-slot3'; // Slot 3 - amarelo
                    } else if (slotIndex === 3) {
                        className += ' active-slot4'; // Slot 4 - rosa
                    } else if (item.percent > 0) {
                        className += ' active-weak'; // Outros lotes em curso
                    }
                    
                    return `<div class="${className}">${item.lote}</div>`;
                })
                .join('');
        } else {
            infoPanelCard1.innerHTML = '<div class="info-line">No buffer</div>';
        }
    }
    
    // Update PLANEAMENTO card with planning data from PSMulti
    const infoPanelCard2 = document.querySelector('.info-panel-content-2');
    const gridContainer = document.querySelector('.grid-container');
    
    if (infoPanelCard2) {
        if (planningData.slots && planningData.slots.length > 0) {
            // Remove classes de grelha por padrao
            infoPanelCard2.classList.remove('two-rows');
            infoPanelCard2.classList.remove('multi-slot');
            
            // Remove ou adiciona classe expanded-planeamento ao grid-container
            if (planningData.slots.length > 2) {
                gridContainer?.classList.add('expanded-planeamento');
            } else {
                gridContainer?.classList.remove('expanded-planeamento');
            }
            
            if (planningData.slots.length === 1) {
                // Single slot - display in single column
                const slotData = planningData.slots[0];
                infoPanelCard2.innerHTML = `
                    <div class="slot-column">
                        <div class="info-line">Lote: ${slotData.lote}</div>
                        <div class="info-line">Qtd: ${slotData.quantidade}</div>
                        <div class="info-line">${slotData.dataPretendida}</div>
                    </div>
                `;
            } else {
                // Multiple slots - display in grid
                // 2 lotes: grelha 1x2; 3+ lotes: grelha 2x2
                if (planningData.slots.length === 2) {
                    infoPanelCard2.classList.add('two-rows');
                } else {
                    infoPanelCard2.classList.add('multi-slot');
                }
                
                const slotsHtml = planningData.slots.map(slotData => {
                    return `
                        <div class="slot-column">
                            <div class="info-line">Lote: ${slotData.lote}</div>
                            <div class="info-line">Qtd: ${slotData.quantidade}</div>
                            <div class="info-line">${slotData.dataPretendida}</div>
                        </div>
                    `;
                }).join('');
                
                infoPanelCard2.innerHTML = slotsHtml;
            }
        } else {
            infoPanelCard2.innerHTML = '<div class="info-line">No active slots</div>';
            gridContainer?.classList.remove('expanded-planeamento');
        }
    }
    
    // Update status indicator based on CF column (STATUS)
    const statusValue = (await fetchTextValue('CF', 2)).toUpperCase();
    const statusIndicator = document.getElementById('status-indicator');
    if (statusIndicator) {
        if (statusValue === 'ON') {
            statusIndicator.src = 'https://static.wixstatic.com/media/a6967f_e69c4b86d193485596b9d3d2d49625c3~mv2.png';
            statusIndicator.alt = 'Status ON';
        } else if (statusValue === 'OFF') {
            statusIndicator.src = 'https://static.wixstatic.com/media/a6967f_226d67906a30456d92ac9b34c151654a~mv2.png';
            statusIndicator.alt = 'Status OFF';
        }
        console.log('🔴 Status updated from CF2:', statusValue);
    }
    
    // Update GOAL chart with data from PSMulti
    const goalData = await fetchGoalData();
    updateGoalChart(goalData.diasPrazo, goalData.diasPrazoExtra, goalData.diasUsados, goalData.folga);
    
    // Update Log Operacional card (info-panel-card-5) using CN1:DK2 (headers + row 2 values)
    const logOperacionalContainer = document.querySelector('.info-panel-content-5');
    if (logOperacionalContainer) {
        const { headers, values } = await fetchRangeHeadersAndRow('CN', 'DK', 2);
        const logValues = [];

        headers.forEach((header, index) => {
            const value = values[index];
            if (String(value).trim() === '1' && header) {
                logValues.push(header);
            }
        });
        logOperacionalContainer.innerHTML = ''; // Clear existing content
        
        // Determine if there's actual content
        const hasContent = logValues.length > 0;
        const bgColor = hasContent 
            ? 'rgba(82, 196, 26, 0.15)' // Slightly green when has values
            : 'rgba(255, 255, 255, 0.08)'; // Default slight white
        const borderColor = hasContent
            ? 'rgba(82, 196, 26, 0.3)' // Green border when has values
            : 'rgba(255, 255, 255, 0.15)'; // Default border
        
        if (logValues.length === 0) {
            const gridItem = document.createElement('div');
            gridItem.style.cssText = `padding: 6px; background: ${bgColor}; border-radius: 4px; border: 1px solid ${borderColor}; display: flex; align-items: center; justify-content: center; text-align: center; word-wrap: break-word; overflow-wrap: break-word; overflow: hidden; white-space: normal; line-height: 1.2;`;
            gridItem.textContent = '—';
            logOperacionalContainer.appendChild(gridItem);
            return;
        }

        logValues.forEach(value => {
            const gridItem = document.createElement('div');
            gridItem.style.cssText = `padding: 6px; background: ${bgColor}; border-radius: 4px; border: 1px solid ${borderColor}; display: flex; align-items: center; justify-content: center; text-align: center; word-wrap: break-word; overflow-wrap: break-word; overflow: hidden; white-space: normal; line-height: 1.2;`;
            gridItem.textContent = value;
            logOperacionalContainer.appendChild(gridItem);
        });

        console.log('📋 Log Operacional grid updated with CI values:', logValues.length, '| Has content:', hasContent);
    }
    
    console.log('Info panel updated with:', data);
};

/**
 * Initializes progress bar
 */
const initProgressBar = () => {
    updateEvoProgress();
    // Update every 30 seconds
    setInterval(updateEvoProgress, 30000);
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', async () => {
        initCharts();
        initProgressBar();
        await updateDestination();
        updateInfoPanel();
    });
} else {
    initCharts();
    initProgressBar();
    updateDestination();
    updateInfoPanel();
}
