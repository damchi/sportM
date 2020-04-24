import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class S3Service {

  constructor() { }

  uploadFile(folderName,file) {
    const contentType = file.type;
    const bucket = new S3(
      {
        accessKeyId: 'AKIASAGEBSH54YUFSJYB',
        secretAccessKey: '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',
        region: 'US East (N. Virginia) us-east-1'
      }
    );
    const params = {
      Bucket: 'sportmbbecbd1e48374d90b40851bea188c0db191148-devsdamien',
      Key: folderName + file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    };
    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('Successfully uploaded file.', data);
      return true;
    });
//for upload progress
    /*bucket.upload(params).on('httpUploadProgress', function (evt) {
              console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
          }).send(function (err, data) {
              if (err) {
                  console.log('There was an error uploading your file: ', err);
                  return false;
              }
              console.log('Successfully uploaded file.', data);
              return true;
          });*/
  }
}
