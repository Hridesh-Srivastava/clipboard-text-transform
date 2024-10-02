export const transformToUpper = (text) => text.toUpperCase();
export const transformToLower = (text) => text.toLowerCase();
export const transformToCamel = (text) => {
    return text
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
            index === 0 ? word.toLowerCase() : word.toUpperCase()
        )
        .replace(/\s+/g, '');
};

export const copyToClipboard = async (text) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        console.log('📋 Text copied to clipboard!');
    } else {
        console.error('⚠️  Oops! Clipboard API not supported. Running outside of a browser environment.');
    }
};

export const applyTransformation = async (text, mode) => {
    let transformedText;

    switch (mode) {
        case 'upper':
            transformedText = transformToUpper(text);
            break;
        case 'lower':
            transformedText = transformToLower(text);
            break;
        case 'camel':
            transformedText = transformToCamel(text);
            break;
        default:
            transformedText = text; 
    }

    await copyToClipboard(transformedText);
    return transformedText; 
};
