import BigNumber from 'bignumber.js'

// By far NEAR uses the highest decimal places (yocto)
export const MAX_DECIMAL_PLACES = 24

// Set max decimal places
BigNumber.set({ DECIMAL_PLACES: MAX_DECIMAL_PLACES })

export interface Logger {
  info(...args: unknown[]): void
  error(...args: unknown[]): void
}

export const nopLogger: Logger = {
  info: (..._args: unknown[]) => {},
  error: (..._args: unknown[]) => {}
}

// fixes the BigInt serialization (see: https://github.com/GoogleChromeLabs/jsbi/issues/30)
export function SafeJSONStringify (obj: any, space?: number): string {
  return JSON.stringify(
    obj,
    (key, value) => (typeof value === 'bigint' ? value.toString() : value), // return everything else unchanged
    space
  )
}

export function checkMaxDecimalPlaces (denomMultiplier: string) {
  if (
    BigNumber(denomMultiplier)
      .dividedBy(10 ** MAX_DECIMAL_PLACES)
      .gt(1)
  ) {
    throw new Error(`denomMultiplier ${denomMultiplier} exceeds maximum decimal precision: ${MAX_DECIMAL_PLACES}`)
  }
}

export function sortObjectByKeys<T> (obj: T): T {
  if (Array.isArray(obj)) {
    return obj.map(sortObjectByKeys) as T
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj)
      .sort()
      .reduce((acc, key) => {
        ;(acc as any)[key] = sortObjectByKeys((obj as any)[key])
        return acc
      }, {} as T)
  }
  return obj
}

export const DEFAULT_TRACKING_REF_CODE = 'sdk-chorusone-staking' as const
