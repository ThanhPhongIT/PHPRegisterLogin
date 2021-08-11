/* eslint-disable @typescript-eslint/naming-convention */
export interface ProfileModel {
  Avatar: string;
  FullName: string;
  Gender: string;
  DOB: string;
  Phone: string;
  Email: string;
  Address: string;
  Verified: boolean;
}




export interface ProfileQrCodeModel {
    ImageQrcode: string;
    Avatar: string;
    FullName: string;
    DOB: string;
    Manufacture: string;
    Verified: boolean;
    ReceivedLocation: string;
    ListDose: DoseModel[];
}

//
export interface DoseModel {
  DoseTime: string;
  DoseDate: string;
}






