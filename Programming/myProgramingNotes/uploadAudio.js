// ---------------------------------------------------- audio adventure

// 24-07-2022 conclusion:
        // - i still unable to find a way to turn the audio into base64 (solved)
        // - someone said in SO that it is more efficient to transfer the audio or any big data as "native bytes" array buffer.
        
        // so the questions will be:
        // - should we keep learning on how to transform the audio into base64? (learned)
        // - could axios and express handle an arraybuffer transfer?

// 25-07-2022 conclusion:
        // - i used int8array() to create the 8-bit integers which caused the error in window.btoa(binary), i should've used Uint8array()
        // - to send arrayBuffer we need to snd request as multipart/form-data, for express to be able to process form-data request it needs
        // either multer, connect-busboy or multiparty
        // - the slow in vscode editor on server project caused by mongoose
        