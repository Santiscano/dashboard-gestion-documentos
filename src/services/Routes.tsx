
const host = import.meta.env.VITE_BASE_URL

export default {
  host: host,
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
    files: {
      triggerFile: `${host}/genFileRegistered`,
      getFiles: `${host}/getFiles`,
      addFile: `${host}/postFile`,
      editFile: `${host}/putFile`,
      deleteFile: `${host}/deleteFile`,
    },
    stateFiles: {
      getStateFiles: `${host}/getStatesFiles`,
      addStateFile: `${host}/postStatesFile`,
      editStateFile: `${host}/putStatesFile`,
      deleteStateFile: `${host}/deleteStatesFile`,
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
    },
    uploadFiles: {
      getFiles: `${host}/pdfFiles`,
      getFile: `${host}/pdfFile/:radicado`,
    },
    routesApi: {
      getRoutes: `${host}/routerApi`,
    },
  }
}
