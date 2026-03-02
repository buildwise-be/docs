---
# === Identification ===
id: "privacy-policy"
slug: "privacy-policy"
locale: "de"

# === Content Metadata ===
title: "Datenschutzerklärung"
description: "Datenschutzerklärung für die Tooli-Plattform."
seo_title: "Datenschutzerklärung | Tooli"
seo_description: ""

# === Navigation ===
section: "legal"
order: 2


# === Translation Management ===
source_language: "en"
translation_status: "translated"
last_updated: "2025-11-21"
source_version: "1.0"
translator: ""

# === Page Settings ===
toc: true
prev_page: "terms-of-service"
next_page: "legal-notice"
---

**Last updated: 21/11/2025**

## About this Policy

This Privacy Policy (the "Policy") describes how we (as defined below) collect, share and use any information which, used alone or in combination with other information, relates to you ("Personal Data") when you ("you" and "your", "User") create an account to access the intelligent legal platform ("Tooli") made available to you on the website www.tooli.be. The Policy also applies to the management of account access rights, the collection of aggregated data for statistical or monitoring purposes, and the communication of information relating to the activities and operation of Tooli.

For Personal Data that we collect outside of Tooli, please refer to our Privacy Policy relating to the protection of personal data available at the following link: www.tooli.be

Please take the time to read this Policy carefully. If you have any questions or comments, please contact our data protection officer at the following address: gdpr@Buildwise.be .

For the purposes of this Policy, Buildwise, which has its registered office at Kleine Kloosterstraat 23, 1932 Zaventem, registered with Banque-Carrefour des Entreprises de Belgique (Belgian Crossroads Bank for Enterprises) under number 0407.695.057, ("Buildwise", "we", "our") acts as Data Controller for the Personal Data collected in order to provide its service, Tooli.

Conversely, the User acts as Data Controller within the meaning of the applicable Data Protection Law, in respect of the use of Tooli and all data which they integrate into it. In this context, Buildwise acts as Sub-processor.

This Policy sets out Buildwise's commitments regarding data protection and the measures implemented to ensure the security and confidentiality of your personal data. It also specifies the rights you have in this regard and the practical procedures for exercising them with us.

## Categories of data collected and purposes

The types of Personal Data that we collect, and the reasons why we process them include:

| Purpose of processing | Types of data processed | Legal basis |
|---|---|---|
| Creation and management of the user account | Name, first name, professional email address, password, organisation/profession | Performance of the contract |
| Secure access and maintenance of Tooli | Technical and connection data (logs, identifiers) | Legitimate interest (security and operation) |
| Improvement of experience and platform development | Aggregated usage data, interactions, usage statistics | Legitimate interest |
| Statistical analyses and growth measurement | Aggregated monitoring and internet connection data | Consent |
| Response to requests or assistance | Last name, first name, email, message content | Legitimate interest (user support) |
| Communication of information or news | Last name, first name, work email | Consent, legitimate interest |

If we were to request other Personal Data not mentioned above, we would clearly indicate to you, at the time of collection, the nature of the information requested and the reasons for such request.

Some Personal Data may also be obtained indirectly, for example when a User associates you with their account in order to allow you to access their space.

Furthermore, we may automatically collect certain technical information relating to your device. This may include your IP address, the type of device used, unique identifiers, browser type, approximate location (country or city) as well as other technical data. We may also collect information relating to your interaction with Tooli, such as pages viewed or links selected. This data helps us to better understand the profile of Tooli Users, where they come from and the content that is of interest to them. It is used for internal analysis purposes and to improve the relevance and overall experience of Tooli.

Some of this information may be collected by means of cookies or similar technologies, in accordance with our Cookie Notice available at www.tooli.be.

Generally speaking, the Personal Data collected is used only for the purposes described in this Policy or those brought to your attention at the time of collection. We may however process it for other purposes, provided that they are compatible with the purposes initially communicated and authorised by the applicable Data Protection Law.

## Recipients of your Personal Data

We may forward your Personal Data to the following categories of recipients:

Technical service providers and sub-processors: developers, hosting providers, providers of analysis or support tools, acting under strict instructions from Buildwise. We require these sub-processors to process Personal Data and act strictly in accordance with our instructions and to take appropriate measures to ensure that Personal Data remains protected.

Authorities or public bodies: to any competent law enforcement body, regulator, government agency, court, or other third party, where we believe that disclosure is necessary pursuant to applicable laws or regulations, or in order to establish or defend our rights, or in order to protect your vital interests or those of any other person.

External advisers: auditors, advisers, legal representatives and similar agents in connection with the advisory services they provide to us and subject to confidentiality undertakings;

Authorised third parties: to any other person where you have given your prior consent to the disclosure.

## Protection principles

In accordance with this Policy, we shall process Personal Data as follows:

Fairness: Personal Data shall be processed fairly and transparently. We undertake to provide clear information on the processing methods and to act in accordance with the legislation in force.

Lawfulness: No processing shall be carried out without a valid legal basis; any use of Personal Data shall be based on a lawful basis.

Purpose limitation: Personal Data shall only be collected and processed for specified, explicit and legitimate purposes. It shall not be subject to any subsequent use incompatible with these initial purposes.

Data minimisation: The data is adequate, relevant and limited to what is necessary with regard to the purposes for which it is processed.

Accuracy: We shall implement reasonable measures to ensure that Personal Data is accurate, complete and, if necessary, regularly updated. However, you remain obliged to notify us without delay of any modification or inaccuracy in order to maintain the accuracy of your information.

Integrity and confidentiality: Personal Data is processed in a manner ensuring its security, including protection against unauthorised access, unlawful processing, loss, destruction or accidental damage, by means of appropriate technical and organisational measures.

Accountability: Buildwise assumes responsibility for compliance with these principles and is able to demonstrate, at any time, the compliance of the processing implemented, in particular through the maintenance of adequate documentation, the establishment of internal procedures and the carrying out, where required, of impact assessments or compliance audits.

## Security

We use appropriate technical and organisational measures to protect the Personal Data that we collect and process about you. The measures that we use are designed to provide a level of security appropriate to the risk of processing your Personal Data. The security measures that we implement include in particular:

Encryption of data in transit and at rest:
All communications are protected by HTTPS/TLS (TLS 1.3, with support for TLS 1.2 if necessary). Data is encrypted at rest.

Strict environment isolation (tenant isolation):
Each organization's data (conversations, configurations, user accounts, audit logs, MCP connections) is logically isolated and protected against any inter-tenant access.

Secure management of credentials and secrets:
Passwords are hashed (bcrypt), access tokens (JWT) are cryptographically signed, and sensitive keys/APIs are never stored in clear text. Detection and automatic redaction mechanisms prevent sensitive data from being logged.

Strengthened authentication and short-lived sessions:
Short-lived access tokens and rotating refresh tokens are used to reduce risks. We support local authentication, Buildwise SSO, Google Authentication, and Azure AD / Entra ID.

Access controls and the principle of least privilege:
Each user, agent, or tool can operate only within the permissions explicitly granted to them. No internal mechanism allows to bypass authorization constraints making use of AI.

Auditability and structured logging:
We record all security-relevant events: authentication attempts, permission changes, suspicious activity, data access, agent/tool executions, and migrations. All sensitive data is automatically masked.

Operational protection and abuse prevention:
Rate-limiting mechanisms protect against abusive automated use or attacks.

Ephemeral data processing by model providers:
When an external model (Azure, AWS Bedrock, Google) is used, data is processed only in memory and is never stored or reused for training.

External intrusion test:
An independent intrusion test was performed in November 2025, and all identified critical vulnerabilities have been fixed.

## International data transfers

Your Personal Data may be transferred to and processed in countries other than the one in which you reside. These countries may have data protection laws which differ from the laws of your own country and in certain cases, be less protective.

More specifically, our servers are located within the European Economic Area (EEA).

However, it is possible that some of our service providers or suppliers (for example, IT or hosting solutions) are established outside the European Economic Area (EEA) or process data from a third country. In this case, we ensure that these transfers are governed in accordance with Chapter V of the GDPR and that an adequate level of protection is guaranteed.

To this end, we use one or more of the following mechanisms: an adequacy decision of the European Commission; the standard contractual clauses adopted by the European Commission, together with, where appropriate, supplementary measures; any other appropriate safeguard provided for by GDPR.

We do not transfer any data outside the EEA without having implemented these safeguards and without ensuring that Data subjects have enforceable rights and effective remedies.

## Data retention

We retain the Personal Data that we collect from you where we have a legitimate business need (for example in order to provide you with a service that you have requested or to comply with applicable legal requirements).

Therefore, we retain Personal Data for the following periods:

For the creation and management of your user account: up to 2 years from the last activity;

For statistical analysis of usage and growth: up to 2 years from the last activity.

Where we no longer have a legitimate business need to process your Personal Data, we anonymise it, or we delete it or if this latter action is not possible (for example, your Personal Data has been stored in backup archives), we retain it securely and isolate it from any further processing until deletion is possible.

## Your data protection rights

You have the following data protection rights, which you may exercise by contacting us at the address gdpr@Buildwise.be.

Right of access, rectification, updating and erasure: you may request to access your Data, to correct it if it is inaccurate, to update it or to request its deletion.

Right to object, restriction and portability: in certain circumstances, you may object to the processing of your Data, request the restriction of its use or seek the portability of your Data to you or to a third party.

Right to withdraw consent: where processing is based on your consent, you may withdraw it at any time. This withdrawal shall not affect the legality of processing carried out prior thereto, nor processing based on other legal grounds (such as contract or legal obligation).

Right to lodge a complaint: if you have concerns regarding the manner in which we process your Data, we invite you to contact us in the first instance. If you consider that your request has not been sufficiently addressed, you have the right to lodge a complaint with the competent supervisory authority, such as the Belgian Data Protection Authority

Data Protection Authority

Rue de la Presse 35

1000 Brussels

Telephone: +32 (0)2 274 48 00

Email: contact@apd-gba.be

Website: www.autoriteprotectiondonnees.be

We respond to all requests that we receive from individuals wishing to exercise their rights relating to the protection of their Personal Data in accordance with the applicable Data Protection Laws.

## Updates to this Policy

We may revise this Policy from time to time in order to reflect changes in legal, technical or organisational requirements. In the event of a material amendment, we shall take appropriate steps to inform you thereof, depending on the nature and impact of the changes.

The date of the last update appears at the top of this Policy and allows you to verify the most recent version.

## Contact

If you have any questions regarding the processing of your Personal Data or if you wish to exercise your rights, please contact us by email at the address gdpr@Buildwise.be.

This version of the Policy comes into force and was updated on 21 November 2025.
