// Type definitions for omise-js 2.5.6
// Project: https://github.com/saltyAom/omise-type
// Definitions by: SaltyAom <https://github.com/saltyAom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Third-party Omise.js TypeScript's typings support.
 */

import Omise from './lib/omise'
import OmiseCard from './lib/omiseCard'

declare global {
	interface Window {
		/**
		 * You can use the following methods on `Omise` to create a one-time-use token or source.
		 * 
		 * @see https://www.omise.co/omise-js#omise-methods
		 */
		 Omise: Omise
		/**
		 * You can use the following methods on `OmiseCard` to customize the appearance and behavior of your form.
		 * 
		 * @see https://www.omise.co/omise-js#omisecard-methods
		 */
		 OmiseCard: OmiseCard
	}
	const Omise: Omise
	const OmiseCard: OmiseCard
}

export { Omise, OmiseCard }
