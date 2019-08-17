import 'cookieconsent'
import 'cookieconsent/build/cookieconsent.min.css'

document.addEventListener('DOMContentLoaded', init)

function init() {
    window.cookieconsent.initialise({
        'palette': {
            'popup': {
            'background': '#1b3e77',
            'text': '#ffffff'
            },
            'button': {
            'background': '#ffffff',
            'text': '#000000'
            }
        },
        'content': {
            'message': 'Sie stimmen durch die Nutzung unserer Website zu, dass Cookies auf Ihrem Gerät gespeichert werden und Google Analytics zum Einsatz kommt, um Ihnen den bestmöglichen Service zu bieten. Siehe dazu auch unsere ',
            'dismiss': 'Ok',
            'link': 'Datenschutzerklärung.',
            'href': '/impressum'
        }
    })
}
