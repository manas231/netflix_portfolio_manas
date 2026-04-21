// queries/getWorkPermit.ts
import { WorkPermit } from '../types';

const GET_WORK_PERMIT = `
  query {
    workPermit {
      visaStatus
      expiryDate
      summary
      additionalInfo
    }
  }
`;


