const handleSubmit = (event) => {
    event.preventDefault();

    const resultHolder = document.getElementById('results');
    const txtField = document.getElementById('name');
    const errorHolder = document.getElementById('errorMsg');
    resultHolder.innerHTML = '';
    errorHolder.innerHTML = '';

    // check what text was put into the form field
    let formText = txtField.value.trim();
    let textType = Client.checkValidUrl(formText) ? 'URL' : 'TEXT';

    if (Client.checkEmptyInput(formText)) {
        Client.postData('/nlp', {
            term: formText,
            type: textType,
        }).then((result) => {
            resultHolder.innerHTML = Client.formatResult(
                result,
                formText,
                textType
            );
            txtField.value = '';
            errorHolder.innerHTML = '';
        });
    } else {
        errorHolder.innerHTML = 'Please enter text or URL in the form below.';
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
    let output =
        '<strong class="result-head">Text/URL: </strong><span>' +
        inputVal +
        '</span><br>';
    output +=
        '<strong class="result-head">Type: </strong><span>' +
        inputType +
        '</span><br>';
    if (data.status.code === '0') {
        output +=
            '<strong class="result-head">Polarity: </strong><span>' +
            Client.translatePolarity(data.score_tag) +
            '</span><br>';
        output +=
            '<strong class="result-head">Subjectivity: </strong><span>' +
            data.subjectivity +
            '</span><br>';
        output +=
            '<strong class="result-head">Agreement: </strong><span>' +
            data.agreement +
            '</span><br>';
        output +=
            '<strong class="result-head">Confidence: </strong><span>' +
            data.confidence +
            '</span class="result-head"></br>';
        output +=
            '<strong class="result-head">Irony: </strong><span>' +
            data.irony +
            '</span></br>';
    } else {
        output +=
            '<strong class="result-head">Error: </strong><span>' +
            data.status.msg +
            '</span></br>';
    }
    return output;
};

const translatePolarity = (score) => {
    let polarity = 'N/A';
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
    }
    return polarity;
};

export { handleSubmit, postData, formatResult, translatePolarity };
