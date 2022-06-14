import * as ActionTypes from "./ActionType";
import { baseUrl } from "../shared/baseUrl";

// -----------------STAFFS---------------------//

export const baseMethod = ({ methodName, url, dispatch, options }) => {
  dispatch(loading(true));
  switch (methodName) {
    case "GET":
      return fetch(url).then(
        (response) => {
          if (response.ok) {
            return response.json();
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errmess = new Error(error.message);
          throw errmess;
        }
      );
    case "POST":
      return fetch(url, {
        method: methodName,
        body: JSON.stringify(options.data),
        headers: { "Content-Type": "application/json" },
      })
        .then(
          (response) => {
            if (response.ok) {
              return response;
            }

            if (!Response.ok) {
              let err = new Error(
                "Error " + response.status + ": " + response.statusText
              );
              throw err;
            }
          },
          (err) => {
            let errmess = new Error(err.message);
            throw errmess;
          }
        )
        .then((res) => res.json())
        .then((list) => {
          dispatch(addStaffs(list));
        });
  
    default:
  }
};

export const getMethod = ({ url, dispatch, options }) => {
  return baseMethod("GET", url, dispatch, options);
};

export const postMethod = ({ url, dispatch, options }) => {
  return baseMethod("POST", url, dispatch, options);
};

export const putMethod = ({ url, dispatch, options }) => {
  return baseMethod("PUT", url, dispatch, options);
};

export const deleteMethod = ({ url, dispatch, options }) => {
  return baseMethod("DELETE", url, dispatch, options);
};

export const fetchStaffs = () => (dispatch) => {
  dispatch(loading(true));
  return fetch(baseUrl + "staffs").then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        var error = new Error(
          "Error " + response.status + ": " + response.statusText
        );
        error.response = response;
        throw error;
      }
    },
    (error) => {
      var errmess = new Error(error.message);
      throw errmess;
    }
  );
};

export const staffsLoading = () => {
  return {
    type: ActionTypes.STAFFS_LOADING,
  };
};

export const staffsFailed = (errmess) => {
  return {
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess,
  };
};

export const addStaffs = (staffs) => {
  return {
    type: ActionTypes.ADD_STAFFS,
    payload: staffs,
  };
};

// Add New staff to baseUrl
export const PostData = (newStaff) => (dispatch) => {
  fetch(baseUrl + "staffs", {
    method: "POST",
    body: JSON.stringify(newStaff),
    headers: { "Content-Type": "application/json" },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        }

        if (!Response.ok) {
          let err = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          throw err;
        }
      },
      (err) => {
        let errmess = new Error(err.message);
        throw errmess;
      }
    )
    .then((res) => res.json())

    // Hanlde when get response successful
    .then((list) => {
      dispatch(addStaffs(list));
    });
};


// Edit staffs
export const EditData = (editData) => (dispatch) => {
  fetch(baseUrl + "staffs", {
    method: "PATCH",
    body: JSON.stringify(editData),
    headers: { "Content-Type": "application/json" },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        }

        if (!response.ok) {
          let err = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          throw err;
        }
      },
      (err) => {
        let errmess = new Error(err.message);
        throw errmess;
      }
    )
    .then((response) => response.json())

    // Hanlde when get response successful
    .then((list) => {
      dispatch(addStaffs(list));
    });
};

// ---------- Delete data to baseUrl ----------
export const DeleteData = (id) => (dispatch) => {
  fetch(baseUrl + "staffs/" + id, {
    method: "DELETE",
    header: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((list) => {
      dispatch(addStaffs(list));
    });
};


// ----------------------DEPARTMENTS-----------------//
export const fetchDepartments = () => (dispatch) => {
  dispatch(loading(true));
  return fetch(baseUrl + "departments").then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        var error = new Error(
          "Error " + response.status + ": " + response.statusText
        );
        error.response = response;
        throw error;
      }
    },
    (error) => {
      var errmess = new Error(error.message);
      throw errmess;
    }
  );
};

export const loading = () => {
  return {
    type: ActionTypes.LOADING,
  };
};

export const departmentsLoading = () => {
  return {
    type: ActionTypes.DEPARTMENTS_LOADING,
  };
};

export const departmentsFailed = (errmess) => {
  return {
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errmess,
  };
};

export const addDepartments = (departments) => {
  return {
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: departments,
  };
};

//-----------------------SALARYS-----------------------//
export const fetchSalarys = () => (dispatch) => {
  dispatch(salarysLoading(true));
  return fetch(baseUrl + "staffsSalary")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((salarys) => dispatch(addSalarys(salarys)))
    .catch((error) => dispatch(salarysFailed(error.message)));
};

export const salarysLoading = () => {
  return {
    type: ActionTypes.SALARYS_LOADING,
  };
};

export const salarysFailed = (errmess) => {
  return {
    type: ActionTypes.SALARYS_FAILED,
    payload: errmess,
  };
};

export const addSalarys = (salarys) => {
  return {
    type: ActionTypes.ADD_SALARYS,
    payload: salarys,
  };
};

// ---------- Push data to baseUrl ----------//
export const postData = (newStaff) => (dispatch) => {
  fetch(baseUrl + "staffs", {
    method: "POST",
    body: JSON.stringify(newStaff),
    headers: { "Content-Type": "application/json" },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        }

        if (!Response.ok) {
          let err = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          throw err;
        }
      },
      (err) => {
        let errmess = new Error(err.message);
        throw errmess;
      }
    )
    .then((res) => res.json())

    // Hanlde when get response successful
    .then((list) => {
      dispatch(addStaffs(list));
    });
};

// ---------- Edit data to baseUrl ----------
export const editData = (editData) => (dispatch) => {
  fetch(baseUrl + "staffs", {
    method: "PATCH",
    body: JSON.stringify(editData),
    headers: { "Content-Type": "application/json" },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        }

        if (!response.ok) {
          let err = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          throw err;
        }
      },
      (err) => {
        let errmess = new Error(err.message);
        throw errmess;
      }
    )
    .then((response) => response.json())

    // Hanlde when get response successful
    .then((list) => {
      dispatch(addStaffs(list));
    });
};

// ---------- Delete data to baseUrl ----------
export const deleteData = (id) => (dispatch) => {
  fetch(baseUrl + "staffs/" + id, {
    method: "DELETE",
    header: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((list) => {
      dispatch(addStaffs(list));
    });
};
