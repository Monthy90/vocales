/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');


const DOCUMENT_ID = "inicio";
const DOCUMENT_ID1 = "vocal";
const DOCUMENT_ID2 = "vocalA";
const DOCUMENT_ID3 = "vocalB";
const DOCUMENT_ID4 = "vocalI";
const DOCUMENT_ID5 = "vocalO";
const DOCUMENT_ID6 = "Ayuda";
const DOCUMENT_ID7 = "Adios";

////////////////////////////////////////////////////////////////////////bienvenida
const datasource = {
    "headlineExampleData": {
        "type": "object",
        "backgroundImage": "https://img.freepik.com/vector-gratis/ilustracion-vocales-dibujadas-mano_23-2150131522.jpg?w=2000",
        "logoUrl": "https://2.bp.blogspot.com/-deVSTM2yDYE/WBS_AJ9v3iI/AAAAAAAAAFw/i-pm3FSs-T8tYApzGqGYMuyW-PtK5lh7wCLcB/s1600/GIF2.gif",
        "textContent": {
            "primaryText": "Vocales",
            "secondaryText": "ayuda a que tus hijos aprenda las vocales, de manera dinamica."
        },
        "properties": {
            "hintText": "Vocales"
        },
        "transformers": [
            {
                "inputPath": "hintText",
                "transformer": "textToHint"
            }
        ]
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////vocal a

const datasource1 = {
    "imageListData": {
        "headerTitle": "Vocal A",
        "headerAttributionImage": "",
        "backgroundImageSource": "https://img.freepik.com/foto-gratis/diseno-diseno-fondo-naranja-liso-abstracto-estudio-sala-plantilla-web-informe-comercial-color-degradado-circulo-suave_1258-52709.jpg",
        "defaultImageSource": "https://educanimando.com/wp-content/uploads/2016/02/LETRA_A.jpg",
        "hintText": "Aprende conmigo algunas palbaras con la vocal A",
        "listItemsToShow": [
            {
                "primaryText": "A de Abeja",
                "imageSource": "https://4.bp.blogspot.com/-7gdCA2FgMB8/TnHlpLTvCdI/AAAAAAAADHI/Bz3EV5vJw_E/s1600/abeja_c.gif",
                "imageProgressBarPercentage": 90,
                "imageShowProgressBar": false,
                "ratingSlotMode": "multiple"
            },
            {
                "primaryText": "A de Ana",
                "imageSource": "https://i0.wp.com/docentesaldia.com/wp-content/uploads/2020/12/Rimas-cortas-para-ninos-6.png?fit=960%2C960&ssl=1",
                "imageProgressBarPercentage": 50,
                "ratingSlotMode": "multiple"
            },
            {
                "primaryText": "A de Aurora",
                "ratingSlotMode": "multiple"
            }
        ]
    }
};

const createDirectivePayload1 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////vocal e

const datasource2 = {
    "imageListData": {
        "headerTitle": "Vocal E",
        "headerAttributionImage": "",
        "backgroundImageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw4YELl-c5atFRJLUgCvQRrlsf1kmcOtK9Nw&usqp=CAU",
        "defaultImageSource": "https://i.pinimg.com/originals/63/0c/63/630c637facb994fe15e5a9211f4173cd.jpg",
        "hintText": "Aprende conmigo algunas palbaras con la vocal E",
        "listItemsToShow": [
            {
                "primaryText": "E de Elefante",
                "imageSource": "https://www.primeraescuela.com/imagestn/alfabeto/set3/elefante_c_200x266.png",
                "imageProgressBarPercentage": 90,
                "imageShowProgressBar": false,
                "ratingSlotMode": "multiple"
            },
            {
                "primaryText": "E de Estrella",
                "imageSource": "https://www.primeraescuela.com/imagestn/alfabeto/set3/estrella-mar_c_200x266.png",
                "imageProgressBarPercentage": 50,
                "ratingSlotMode": "multiple"
            },
            {
                "primaryText": "E de Escalera",
                "ratingSlotMode": "multiple"
            }
        ]
    }
};

const createDirectivePayload8 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

//////////////////////////////////////////////////////////////////////////////////////////////////VOCAL i
const datasource3 = {
    "imageListData": {
        "headerTitle": "Vocal I",
        "headerAttributionImage": "",
        "backgroundImageSource": "https://us.123rf.com/450wm/pxhidalgo/pxhidalgo1402/pxhidalgo140200155/25737799-resumen-de-fondo-amarillo-oscuro.jpg?ver=6",
        "defaultImageSource": "data:image/png;base64,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",
        "hintText": "Aprende conmigo algunas palbaras con la vocal I",
        "listItemsToShow": [
            {
                "primaryText": "I de Iglú",
                "imageSource": "https://www.primeraescuela.com/imagestn/alfabeto/set3/iglu_c_200x266.png",
                "imageProgressBarPercentage": 90,
                "imageShowProgressBar": false,
                "ratingSlotMode": "multiple"
            },
            {
                "primaryText": "I de Isla",
                "imageSource": "https://www.primeraescuela.com/imagestn/alfabeto/set3/isla_c_200w.png",
                "imageProgressBarPercentage": 50,
                "ratingSlotMode": "multiple"
            },
            {
                "primaryText": "I de Iguana",
                "ratingSlotMode": "multiple"
            }
        ]
    }
};

const createDirectivePayload5 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////vocal o
const datasource4 = {
    "imageListData": {
        "headerTitle": "Vocal O",
        "headerAttributionImage": "",
        "backgroundImageSource": "https://www.colorpsychology.org/es/wp-content/uploads/2019/07/azul-color.png",
        "defaultImageSource": "https://primeraescuela.com/imagestn/alfabeto/set3/oso_c_200x266.png",
        "hintText": "Aprende conmigo algunas palabras con la vocal O",
        "listItemsToShow": [
            {
                "primaryText": "O de Oveja",
                "imageSource": "data:image/png;base64,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",
                "imageProgressBarPercentage": 90,
                "imageShowProgressBar": false,
                "ratingSlotMode": "multiple"
            },
            {
                "primaryText": "O de Oro",
                "imageSource": "https://i.pinimg.com/originals/20/90/2d/20902d93bd8de1343258a81418a3f383.png",
                "imageProgressBarPercentage": 50,
                "ratingSlotMode": "multiple"
            },
            {
                "primaryText": "O de Oso",
                "ratingSlotMode": "multiple"
            }
        ]
    }
};
const datasource5 = {
    "imageListData": {
        "headerTitle": "vocales",
        "headerAttributionImage": "",
        "backgroundImageSource": "https://i.ytimg.com/vi/MmnUPEDkpX4/maxresdefault.jpg",
        "defaultImageSource": "https://i0.wp.com/www.actividadesdeinfantilyprimaria.com/wp-content/uploads/2021/01/Tarjetas-para-trabar-las-vocales13.jpg?resize=1024%2C768&ssl=1",
        "hintText": "Aprende conmigo a pronunciar las vocales",
        "listItemsToShow": [
            {
                "primaryText": "vocal A",
                "imageSource": "data:image/png;base64,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",
                "imageProgressBarPercentage": 90,
                "imageShowProgressBar": false,
                "ratingSlotMode": "multiple"
            },
            {
                "primaryText": "vocal E",
                "imageSource": "data:image/jpeg;base64,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",
                "imageProgressBarPercentage": 50,
                "ratingSlotMode": "multiple"
            },
            {
                "primaryText": "VOCAL I",
                "ratingSlotMode": "multiple"
            },
            {
                "primaryText": "Vocal O",
                "imageSource": "https://materialdelprofe.com/wp-content/uploads/2022/12/Vocal-O-en-mayuscula-y-minuscula.png",
                "imageProgressBarPercentage": 90,
                "imageShowProgressBar": false,
                "ratingSlotMode": "multiple"
            },
            {
                "primaryText": "vocal U",
                "imageSource": "https://materialdelprofe.com/wp-content/uploads/2022/12/La-vocal-U-en-minuscula-y-mayuscula.png",
                "imageProgressBarPercentage": 90,
                "imageShowProgressBar": false,
                "ratingSlotMode": "multiple"
            }
        ]
    }
};


const createDirectivePayload3 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};



const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido, aqui aprenderas palabras, pronunciacion acerca de las vocales. puedes decir muestrame las vocales, cuales son las vocales o pedir una en especifica';
          if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'mostrarvocalesIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'A continuacion te enseñare como se pronuncian las vocales, repite conmigo A,  E,  I,  O, U';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID1, datasource5);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
    
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const primeraIntentHandler= {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PrimeravocalldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Aprende palabras como se ven en la imagen, por ejemplo A de abeja, A de Ana, A de Aurora';
        
         if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID2, datasource1);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const segundaIntentHandler= {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SegundavocalldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Aprende conmigo palabras que empiezan con la Vocal E. E de Elefante, E de estrella de mar, E de Escalera';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID3, datasource2);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const terceraIntentHandler= {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'terceravocalldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Aprende conmigo a pronunciar con la vocal I. Comenzamos I de iglú, I de Isla, I de iguana';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID4, datasource3);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const CuartaIntentHandler= {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'cuartavocaldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Aprende conmigo a pronunciar con la vocal O. Comenzamos o de oveja, o de oro, o de oso';
        
          if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID5, datasource4);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};






const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = '¡Hola puedes saludarme! ¿Cómo puedo ayudar?';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID4);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Adios, hasta pronto que tengas una execelente dia';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID6);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        primeraIntentHandler,
        segundaIntentHandler,
        terceraIntentHandler,
        CuartaIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();