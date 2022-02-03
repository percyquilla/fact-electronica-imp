const axios=require('axios');

function soap() {
    let sr =
        '<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="ikea.cusmgmt.remote.ws">' +
        '<SOAP-ENV:Body>' +
        '<ns1:AccountRequestRequest>' +
        '<ns1:ProviderLogin>Repermissioning_Microsite</ns1:ProviderLogin>' +
        '<ns1:ProviderPassword>PROVIDER_PASSWORD</ns1:ProviderPassword>' +
        '<ns1:CustomerId>CUSTOMER_ID</ns1:CustomerId>' +
        '</ns1:AccountRequestRequest>' +
        '</SOAP-ENV:Body>' +
        '</SOAP-ENV:Envelope>';

    axios
        .post('https://testing.cs.quantmarketing.com/Ikbe-onlinesoapapi/Service.asmx', sr, {
            headers: {
                'Content-Type': 'text/xml',
                SOAPAction:
                    'http://schemas.facilinformatica.com.br/Facil.Credito.WsCred/IEmprestimo/CalcularPrevisaoDeParcelas'
            }
        })
        .then(response => console.log(response.data))
        .catch(err => console.log(err));
}

const holaMundo = () => {
    console.log('Hola mundo desde un archivo externo');
};
 module.exports = {
        holaMundo,
        soap
 }
