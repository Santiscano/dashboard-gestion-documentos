
const host = import.meta.env.VITE_BASE_URL
const hostPdf = import.meta.env.VITE_URL_GET_PDF_SETTLED

export default {
  host: host,
  hostPdf: hostPdf,
  api: {
    roles: {
      get: `${host}/getRoles`,
      create: `${host}/postRol`,
      edit: `${host}/putRol`,
      delete: `${host}/deleteRol`,
    },
    cedis: {
      get: `${host}/getSedes`,
      create: `${host}/postSede`,
      edit: `${host}/putSede`,
      delete: `${host}/deleteSede`,
    },
    users: {
      validate: `${host}/getValidateUser`,
      getUsers: `${host}/getUsers`,
      createUser: `${host}/postUser`,
      editUser: `${host}/putUser`,
      deleteUser: `${host}/deleteUser`,
    },
    stateFiles: {
      getStateFiles: `${host}/getStatesFiles`,
      addStateFile: `${host}/postStatesFile`,
      editStateFile: `${host}/putStatesFile`,
      deleteStateFile: `${host}/deleteStatesFile`,
    },
    files: {
      getFiles: `${host}/getFiles`,
      addFile: `${host}/postFile`,
      editFile: `${host}/putFile`,
      deleteFile: `${host}/deleteFile`,
    },
    filesPath: {
      getFilesPath: `${host}/getFilesPath`,
      createFilePath: `${host}/postFilePath`,
      deleteFilePath: `${host}/deleteFilePath`
    },
    centerCost: {
      area: {
        getCostArea: `${host}/getCostArea`,
        createCostArea: `${host}/postCostArea`,
        editCostArea: `${host}/putCostArea`,
        deleteCostArea: `${host}/deleteCostArea`,
      },
      subArea: {
        getCostSubArea: `${host}/getCostSubArea`,
        createCostSubArea: `${host}/postCostSubArea`,
        deleteCostSubArea: `${host}/deleteCostSubArea`,
      },
    },
    Pdf: {
      uploadfile: `${host}/pdfFiles`,
      getFile: `${host}/pdfFile/:radicado`,
    },
    generateSettled: `${host}/genFileRegistered`,
    routesApi: {
      getRoutes: `${host}/routerApi`,
    },
    firebase: {
      createUser: `${host}/createUser`,
      login: `${host}/logIn`,
      validateUser: `${host}/validateUser`,
      changePassword: `${host}/changePassword`
    },
    pdfSettledNumber: `${hostPdf}/pdf`,
  }
}
