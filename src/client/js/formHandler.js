const handleSubmit = (event) => {
    event.preventDefault();

    const resultHolder = document.getElementById('results');
    const txtField = document.getElementById('name');
    resultHolder.innerHTML = '';

    // check what text was put into the form field
    let formText = txtField.value.trim();
    let textType = checkValidUrl(formText) ? 'URL' : 'TEXT';

    if (checkEmptyInput(formText)) {
        postData('/nlp', { term: formText, type: textType }).then((result) => {
            resultHolder.innerHTML = formatResult(result, formText, textType);
            txtField.value = '';
        });
    }
};

const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        //console.log(newData);
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

const formatResult = (data, inputVal, inputType) => {
    result =
        '<strong class="result-head">Text/URL: </strong><span>' +
        inputVal +
        '</span><br>';
    result +=
        '<strong class="result-head">Type: </strong><span>' +
        inputType +
        '</span><br>';
    if (data.status.code === '0') {
        result +=
            '<strong class="result-head">Polarity: </strong><span>' +
            translatePolarity(data.score_tag) +
            '</span><br>';
        result +=
            '<strong class="result-head">Subjectivity: </strong><span>' +
            data.subjectivity +
            '</span><br>';
        result +=
            '<strong class="result-head">Agreement: </strong><span>' +
            data.agreement +
            '</span><br>';
        result +=
            '<strong class="result-head">Confidence: </strong><span>' +
            data.confidence +
            '</span class="result-head"></br>';
        result +=
            '<strong class="result-head">Irony: </strong><span>' +
            data.irony +
            '</span></br>';
    } else {
        result +=
            '<strong class="result-head">Error: </strong><span>' +
            data.status.msg +
            '</span></br>';
    }
    return result;
};

const translatePolarity = (score) => {
    switch (score) {
        case 'P+':
            polarity = 'STRONG POSITIVE';
            break;
        case 'P':
            polarity = 'POSITIVE';
            break;
        case 'NEU':
            polarity = 'NEUTRAL';
            break;
        case 'N':
            polarity = 'NEGATIVE';
            break;
        case 'N+':
            polarity = 'STRONG NEGATIVE';
            break;
        case 'NONE':
            polarity = 'WITHOUT POLARITY';
            break;
        default:
            polarity = 'N/A';
    }
    return polarity;
};
