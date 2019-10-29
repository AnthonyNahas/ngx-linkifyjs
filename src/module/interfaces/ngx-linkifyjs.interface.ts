export interface Link {
  type: string,
  value: string,
  href: string,
}

export interface NgxLinkifyjsConfig {
  enableHash?: boolean,
  enableMention?: boolean
}

export interface NgxLinkifyOptions {
  attributes?: any,
  className?: string,
  defaultProtocol?: string,
  events?: any,
  ignoreTags?: Array<any>,
  nl2br?: boolean,
  tagName?: string,
  target?: { url: string },
  validate?: NgxLinkifyOptionsValidator,
  format?(value: any, type: any): any,
  formatHref?(href: any, type: any): any,
}

export type NgxLinkifyOptionsValidator = boolean | validatorFunction | validatorObject
type validatorFunction = (value: string, type?: "url" | "email") => boolean
type validatorTypeFunction = (value: string) => boolean
interface validatorObject {
  url?: validatorTypeFunction
  email?: validatorTypeFunction
}
