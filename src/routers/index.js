const express = require("express");
const router = express.Router();
/*controllers */
//auth
const {
  registers,
  loginWithEmails,
  loginWithPhones,
  checkAuth,
} = require("../controllers/auth");
const {
  updatedProfiles,
  updatedPhotoProfiles,
  getAllUsers,
} = require("../controllers/profile");
const {
  addChildren,
  getAllChildren,
  getChildrenOfParent,
  updatedChildren,
  updatedPhotoChildren,
  deleteChildrens,
} = require("../controllers/children");
//middlewares
const { auth } = require("../middlewares/auth");
//add photo user
const { uploadFileUser } = require("../middlewares/uploadFIleUser");

// content
const {
  createContent,
  getContents,
  getContentDetail,
  updateContent,
  deleteContent,
} = require("../controllers/content");

const {
  createPaket,
  getPakets,
  getPaketDetail,
  updatePaket,
  deletePaket,
} = require("../controllers/paket");

/*routers */
//auth
router.post("/registers/post", registers);
router.post("/login/email/post", loginWithEmails);
router.post("/login/phone/post", loginWithPhones);
router.get("/check-auth", auth, checkAuth);

//profile parent
router.patch("/user/profile/:id/post", auth, updatedProfiles);
router.patch(
  "/user/profile/photo/:id/post",
  auth,
  uploadFileUser("imageFile"),
  updatedPhotoProfiles
);
router.get("/users", auth, getAllUsers);
router.get("/users/:id", auth, getAllUsers);

//children
router.post("/child/:id/post", auth, addChildren);
router.get("/childs", auth, getAllChildren);
router.get("/child/:id", auth, getChildrenOfParent);
router.patch("/child/:parentId/:childId/post", auth, updatedChildren);
router.patch(
  "/child/photo/:parentId/:childId/post",
  auth,
  uploadFileUser("imageFile"),
  updatedPhotoChildren
);
router.delete("/child/:parentId/:childId/delete", auth, deleteChildrens);

// content
router.post("/addcontent", createContent);
router.get("/getcontents", getContents);
router.get("/getcontent/:id", getContentDetail);
router.patch("/updatecontent/:id", updateContent);
router.delete("/deletecontent/:id", deleteContent);

// paket
router.post("/addpaket", createPaket);
router.get("/getpakets", getPakets);
router.get("/getpaket/:id", getPaketDetail);
router.patch("/updatepaket/:id", updatePaket);
router.delete("/deletepaket/:id", deletePaket);

module.exports = router;
