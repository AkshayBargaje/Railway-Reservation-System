const Owner = require("../models/Owner");

exports.seedSuperAdmin = async () => {
    const email = "akshaybargaje56@gmail.com"
    const password = "abc123"
    const role = "superadmin"
    const ownerExists = await Owner.findOne({ email });
    if (ownerExists) return;

    const newowner = new Owner({
        email,
        password,
        role,
        name: 'Akshay',
        citizenshipNumber: '123',
        phone: 9999999999,
        isVerified: true
    });

    await newowner.save();
    console.warn("Superadmin seeded successfully...")
  };