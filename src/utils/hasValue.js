// True for a non-blank string or any other non-null value, so optional data
// fields (proof, live, github…) can be left null, "" or absent and the UI that
// depends on them simply doesn't render until they're filled in.
export const hasValue = (v) => (typeof v === 'string' ? v.trim().length > 0 : v != null)
