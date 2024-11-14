import * as Papa from "papaparse";
const getData = (url) => {
  let data = [];
  return new Promise((resolve) => {
    Papa.parse(url, {
      download: true,
      header: true,
      complete: (results) => {
        data = results.data;
        console.log("incv", data);
        resolve(data);
      },
    });
  });
};

export const database = getData(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSl2QKL-w0cvIPlrt0k1wEnu3cGCcfoi0I1mytrAikEeGDI_wjAe4f7xa9tZejsuj3eFNSG5P1iGobY/pub?output=csv"
);
