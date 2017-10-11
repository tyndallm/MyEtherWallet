/*** Cache ENS address ***/
export interface CacheEnsAddress {
  type: 'ENS_CACHE';
  payload: {
    ensName: string;
    address: string;
  };
}

export function cacheEnsAddress(
  ensName: string,
  address: string
): CacheEnsAddress {
  return {
    type: 'ENS_CACHE',
    payload: {
      ensName,
      address
    }
  };
}

/*** Resolve Domain ***/
export interface ResolveDomainRequested {
  type: 'ENS_RESOLVE_DOMAIN_REQUESTED';
  payload: { domain: string };
}

export const resolveDomainRequested = (
  domain: string
): ResolveDomainRequested => ({
  type: 'ENS_RESOLVE_DOMAIN_REQUESTED',
  payload: { domain }
});

/*** Resolve Domain ***/
export interface ResolveDomainSuccess {
  type: 'ENS_RESOLVE_DOMAIN_SUCCESS';
  payload: { domain: string; domainData: any };
}

export const resolveDomainSuccess = (
  domain: string,
  domainData: any
): ResolveDomainSuccess => ({
  type: 'ENS_RESOLVE_DOMAIN_SUCCESS',
  payload: { domain, domainData }
});

/*** Resolve Domain ***/
export interface ResolveDomainFailed {
  type: 'ENS_RESOLVE_DOMAIN_FAILED';
  payload: { domain: string; error: Error };
}

export const resolveDomainFailed = (
  domain: string,
  error: Error
): ResolveDomainFailed => ({
  type: 'ENS_RESOLVE_DOMAIN_FAILED',
  payload: { domain, error }
});
/*** Union Type ***/
export type EnsAction =
  | ResolveDomainRequested
  | ResolveDomainSuccess
  | ResolveDomainFailed
  | CacheEnsAddress;