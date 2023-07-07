import { BaseType } from './base.type';

export interface System extends BaseType {
  systemName: string;
  version: string;
  description: string;
  installationDate: Date;
}
