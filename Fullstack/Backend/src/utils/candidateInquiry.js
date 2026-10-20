const Inquiry = require("../models/Inquiry.model");

// Blog ya interest save hone par inquiry banata/update karta hai
exports.syncInquiry = async ({ formType, refId, user, topic, message, details }) => {
  try {
    await Inquiry.findOneAndUpdate(
      { formType, refId },
      {
        formType,
        refId,
        candidate: user._id,
        fullName: user.name,
        email: user.email,
        phone: user.phone || "",
        topic,
        message: (message || "").slice(0, 5000),
        details: { ...details, city: user.city, headline: user.headline },
        status: "new",
      },
      { upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true }
    );
  } catch (e) {
    console.error("Inquiry sync failed:", e.message); // yahi terminal mein dikhega
  }
};

exports.removeInquiry = (formType, refId) =>
  Inquiry.deleteMany({ formType, refId }).catch((e) =>
    console.error("Inquiry remove failed:", e.message)
  );