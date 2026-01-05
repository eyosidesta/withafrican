import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Only POST allowed" });
    }

    const { businessName, contactName, phone, email, category, message } = req.body;

    // Basic validation
    if (!businessName || !contactName || !phone || !email || !category || !message) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"Website Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: `New Business Inquiry from ${businessName}`,
            text: `
New Business Inquiry Received

Business Information:
--------------------
Business Name: ${businessName}
Category: ${category}

Contact Person:
--------------
Name: ${contactName}
Email: ${email}
Phone: ${phone}

Message:
-------
${message}
      `,
            html: `
        <h3>New Business Inquiry Received</h3>
        
        <h4>Business Information:</h4>
        <p><strong>Business Name:</strong> ${businessName}<br>
        <strong>Category:</strong> ${category}</p>
        
        <h4>Contact Person:</h4>
        <p><strong>Name:</strong> ${contactName}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Phone:</strong> ${phone}</p>
        
        <h4>Message:</h4>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        });

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error("Email sending error:", err);
        return res.status(500).json({ message: "Failed to send email", error: err.message });
    }
}
