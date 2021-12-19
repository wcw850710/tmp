import { getStorageItem, useUpdateStorage } from './helper'
import { useSafeState } from '@575/react-common-lib'

export const useSessionStorageState = (key, initialValue) => {
	const [state, setState] = useSafeState(
		getStorageItem(key, initialValue, sessionStorage),
	)
	useUpdateStorage(key, state, sessionStorage)
	return [state, setState]
}
