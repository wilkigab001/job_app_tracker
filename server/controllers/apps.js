const { User } = require("../models/user");
const { Application } = require("../models/application");

module.exports = {
  getApps: async (req, res) => {
    try {
      const { userId } = req.params;
      const applications = await Application.findAll({
        where: { userId: userId },
      });
      console.log(applications);
      res.status(200).send(applications);
      console.log("get apps working");
    } catch (err) {
      console.log(err, "cannot send apps");
      res.sendStatus(400);
    }
  },

  deleteApp: async (req, res) => {
    try {
      const { id } = req.params;
      await Application.destroy({
        where: { id: id },
      });
      res.sendStatus(200);
    } catch (err) {
      console.log(err, "cannot delete");
      res.sendStatus(400);
    }
  },

  editApp: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const {
        appId,
        jobTitle,
        year,
        month,
        hiringManager,
        jobLink,
        company,
        rejected,
        userId,
      } = req.body;
      await Application.update(
        {
          appId,
          jobTitle: jobTitle,
          year: year,
          month: month,
          hiringManager: hiringManager,
          jobLink: jobLink,
          company: company,
          rejected: rejected,
          userId,
        },
        { where: { id: +id } }
      );
    } catch (err) {
      console.log(err, "cannot edit");
      res.sendStatus(400);
    }
  },
  createApp: async (req, res) => {
    try {
      const {
        appId,
        jobTitle,
        year,
        month,
        hiringManager,
        jobLink,
        company,
        rejected,
        userId,
      } = req.body;
      await Application.create({
        appId: appId,
        jobTitle: jobTitle,
        year: year,
        month: month,
        hiringManager: hiringManager,
        jobLink: jobLink,
        company: company,
        rejected: rejected,
        userId
      })
      res.sendStatus(200)
    } catch (err) {
        console.log(err, 'cannot create app')
        res.sendStatus(400)
    }
  },
};
