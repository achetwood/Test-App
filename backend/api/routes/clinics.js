const fs = require('fs');
const { parse } = require('csv-parse/sync');

async function GetClinics() {

  async function retrieveAndParseFile(fileName) {
    try {
      console.log('Parse File');
      return await parseFile(fileName);
    } catch (e) {
      console.log(`Parse File - Error occurred: ${e.message}`);
      throw e;
    }
  };

  // Function to parse csv file and return parsed JS object.
  async function parseFile(fileName) {
    const assestsDir = './assets';

    return new Promise((resolve, error) => {
      fs.readdir(assestsDir, function (err, files) {
        // handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        console.log(files);

        fs.readFile(`${assestsDir}/${fileName}`, (err, data) => {
          if (err) {
            console.error(err);
            return
          }

          const parsedCsv = parse(data, { columns: true });

          resolve(parsedCsv);
        });
      });
    });
  };

  async function mergeAndProcessClientFiles() {

    // Parse raw csv files.
    const clinics = await retrieveAndParseFile('clinics.csv');
    const patientsOne = await retrieveAndParseFile('patients-1.csv');
    const patientsTwo = await retrieveAndParseFile('patients-2.csv');

    // Merge the two patient arrays and generate new id's for each based on array index. This is so each patient has a unique id when passed to the FE.
    const mergedPatients = [...patientsOne, ...patientsTwo].map((row, index) => {
      // Delete original id from array
      delete row.id;

      // Use index as new id for patient
      return {
        id: index + 1,
        ...row,
      }
    });


    // Merge & Hygiene raw data from parsed files using flat map.
    const hygienedPatientsArray = clinics.flatMap(clinic => {
      
      // Filter based on clinic id. Then map filtered array to return single patient object with all parameters.
      const patients = mergedPatients.filter(patient => clinic.id === patient.clinic_id).map(patient => {
        return {
          id: patient.id,
          clinicId: patient.clinic_id,
          firstName: patient.first_name,
          lastName: patient.last_name,
          dateOfBirth: patient.date_of_birth,
          clinicName: clinic.name,
        };
      });

      return patients;
    });

    return hygienedPatientsArray;
  };


  // Run the functions
  const object = await mergeAndProcessClientFiles();

  return object;

};

module.exports = GetClinics;