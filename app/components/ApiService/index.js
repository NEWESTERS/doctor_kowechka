import AppleHealthKit from 'rn-apple-healthkit';
import { Platform } from 'react-native';

if (Platform.OS === 'ios') {
    let options = {
        permissions: {
            read: ["Height", "Weight", "StepCount", "DateOfBirth", "HeartRate", "BloodPressureSystolic", "BloodPressureDiastolic"],
            write: []
        }
    };
    
    AppleHealthKit.initHealthKit(options, (err, results) => {
        if (err) {
            console.log("error initializing Healthkit: ", err);
            return;
        }
    });
}

export default ApiService = {
    getPulse: (callback) => {
        if (Platform.OS === 'ios') {
            const today = Date.now(),
                yesterday = today - 86400000

            let options = {
                unit: 'bpm',
                startDate: (new Date(yesterday)).toISOString(),
                endDate: (new Date(today)).toISOString(),
                ascending: false, 
                limit: 10, 
            };

            AppleHealthKit.getHeartRateSamples(options, (err, results) => {
                if (err) {
                    console.log(err)      
                    return;
                }
                let avgPulse = 0

                results.map(item => {
                    avgPulse += item.value
                })

                avgPulse /= (results.length ? results.length : 1)

                avgPulse = avgPulse == 0 ? Math.random() * 40 + 60 : avgPulse

                callback(Math.floor( avgPulse ))
            });
        } else {
            callback(Math.floor( Math.random() * 40 + 60 ))
        }
    },

    getPicfluometry: (callback) => {
        callback(Math.floor( Math.random() * 200 + 300 ))
    },

    getUpperPressure: (callback) => {
        callback(Math.floor( Math.random() * 40 + 100 ))
    },

    getLowerPressure: (callback) => {
        callback(Math.floor( Math.random() * 20 + 70 ))
    }
}