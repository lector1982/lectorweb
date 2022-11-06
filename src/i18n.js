import { createI18n } from 'vue-i18n'


// function loadLocaleMessages() {
// 	const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
// 	const messages = {}
// 	locales.keys().forEach(key => {
// 		const matched = key.match(/([A-Za-z0-9-_]+)\./i)
// 		if (matched && matched.length > 1) {
// 			const locale = matched[1]
// 			messages[locale] = locales(key).default
// 			console.log(locales(key).default)
// 		}
// 	})
// 	return messages
// }

import en from "./locales/en.json";
import ru from "./locales/ru.json";
import ua from "./locales/ua.json";

const messages = {
	"en": en,
	"ru": ru,
	"ua": ua,
};

export default createI18n({
	legacy: false,
	globalInjection: true,
	locale: process.env.VUE_APP_I18N_LOCALE || 'en',
	fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
	messages: messages
})