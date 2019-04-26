import { Document } from '../app/models/document';

export const DOCUMENTS: Document[] = [
    { name: 'doc 1', description: 'desc 1' ,
         clientInstruction: 'client instruction 1', policy: 'p 1', certification: 'c 1', category: 'cat 1', template: 'template 1'},
         { name: 'doc 2', description: 'desc 2' ,
         clientInstruction: 'client instruction 2', policy: 'p 2', certification: 'c 2', category: 'cat 2', template: 'template 2'},
         { name: 'doc 3', description: 'desc 3' ,
         clientInstruction: 'client instruction 3', policy: 'p 3', certification: 'c 3', category: 'cat 3', template: 'template 3'}
  ];


        // Mappings
        // documentConfiguration.setProduct(formData.getProduct());
        // documentConfiguration.setSubProduct(formData.getSubProduct());
        // documentConfiguration.setService(formData.getClientAction());
        // documentConfiguration.setSubService(formData.getClientActionSubType());
        // documentConfiguration.setAudience(formData.getAudience());
        // documentConfiguration.setResidency(formData.getResidency());
        // documentConfiguration.setCountry(formData.getCountry());
        // documentConfiguration.setRegion(formData.getRegion());
        // documentConfiguration.setSubChannel(formData.getSubChannel());