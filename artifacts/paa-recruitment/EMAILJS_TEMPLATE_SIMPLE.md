# TEMPLATE EMAILJS SIMPLE ET FIABLE

## Template HTML (sans syntaxe complexe) :

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nouvelle candidature Port Autonome d'Abidjan</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .header { background: #1e40af; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #fff; border: 1px solid #ddd; }
        .section { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #eee; }
        .label { font-weight: bold; color: #1e40af; min-width: 140px; font-size: 14px; }
        .value { margin-left: 10px; color: #374151; }
        .footer { background: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        h3 { color: #1e40af; margin-bottom: 10px; }
        h4 { color: #374151; margin-bottom: 15px; }
        img { max-width: 400px; height: auto; border: 1px solid #ddd; border-radius: 8px; margin-top: 10px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🚢 Port Autonome d'Abidjan</h1>
        <h2>Direction des Ressources Humaines</h2>
        <p>Campagne de recrutement 2026</p>
    </div>

    <div class="content">
        <h3>📋 NOUVELLE CANDIDATURE REÇUE</h3>
        <p><strong>Date de soumission :</strong> {{submission_date}}</p>

        <div class="section">
            <h4>👤 INFORMATIONS D'IDENTITÉ</h4>
            <p><span class="label">ID Employé :</span> <span class="value">{{employee_id}}</span></p>
            <p><span class="label">Nom complet :</span> <span class="value">{{from_name}}</span></p>
            <p><span class="label">Nom de famille :</span> <span class="value">{{full_name}}</span></p>
            <p><span class="label">Prénom :</span> <span class="value">{{first_name}}</span></p>
            <p><span class="label">Téléphone :</span> <span class="value">{{phone}}</span></p>
        </div>

        <div class="section">
            <h4>🚨 CONTACT D'URGENCE</h4>
            <p><span class="label">Nom :</span> <span class="value">{{emergency_name}}</span></p>
            <p><span class="label">Téléphone :</span> <span class="value">{{emergency_phone}}</span></p>
        </div>

        <div class="section">
            <h4>🏥 DISPONIBILITÉ ET SANTÉ</h4>
            <p><span class="label">Problème de santé :</span> <span class="value">{{health_issue}}</span></p>
            <p><span class="label">Date de disponibilité :</span> <span class="value">{{availability_date}}</span></p>
        </div>

        <div class="section">
            <h4>💼 INFORMATIONS CNPS</h4>
            <p><span class="label">Carte CNPS :</span> <span class="value">{{has_cnps}}</span></p>
            <p><span class="label">Numéro CNPS :</span> <span class="value">{{cnps_number}}</span></p>
            <p><span class="label">Preuve de paiement :</span> <span class="value">{{cnps_proof_name}}</span></p>
            <img src="{{cnps_proof_base64}}" alt="Preuve de paiement CNPS" />
        </div>

        <div class="section">
            <h4>🆔 CARTE D'IDENTITÉ</h4>
            <p><span class="label">Pièce d'identité :</span> <span class="value">{{identity_card_name}}</span></p>
            <img src="{{identity_card_base64}}" alt="Carte d'identité" />
        </div>

        <div class="section">
            <h4>✅ ENGAGEMENT ET VALIDATION</h4>
            <p><span class="label">Confirmation exactitude :</span> <span class="value">{{confirm_accuracy}}</span></p>
            <p><span class="label">Acceptation CGU :</span> <span class="value">{{accept_terms}}</span></p>
        </div>

        <div class="section">
            <h4>📞 INFORMATIONS DE CONTACT</h4>
            <p>Pour toute question concernant cette candidature :</p>
            <p>• Email : <strong>supportrecrut@gmail.com</strong></p>
            <p>• WhatsApp/Wave : <strong>2250767554748</strong></p>
        </div>
    </div>

    <div class="footer">
        <p>Ce message a été envoyé automatiquement depuis le formulaire de recrutement du Port Autonome d'Abidjan.</p>
        <p>Direction des Ressources Humaines - République de Côte d'Ivoire 🇨🇮</p>
    </div>
</body>
</html>
```

## 📋 Variables EmailJS requises (toutes simples) :

- `submission_date` - Date de soumission
- `employee_id` - ID employé
- `from_name` - Nom complet
- `full_name` - Nom de famille
- `first_name` - Prénom
- `phone` - Téléphone
- `emergency_name` - Contact urgence nom
- `emergency_phone` - Contact urgence téléphone
- `health_issue` - Problème santé
- `availability_date` - Date disponibilité
- `has_cnps` - Carte CNPS
- `cnps_number` - Numéro CNPS
- `cnps_proof_name` - Nom fichier preuve CNPS
- `cnps_proof_base64` - Image preuve CNPS
- `identity_card_name` - Nom fichier carte identité
- `identity_card_base64` - Image carte identité
- `confirm_accuracy` - Confirmation exactitude
- `accept_terms` - Acceptation CGU

## 🎯 Avantages de ce template :

- ✅ **Syntaxe simple** - Pas de `{{#if}}` complexe
- ✅ **Images directes** - Balises `<img>` simples
- ✅ **Compatible EmailJS** - Variables standards
- ✅ **Design propre** - CSS intégré

## 📝 Instructions :

1. **Copiez ce HTML** dans votre template EmailJS
2. **Ajoutez les variables** listées ci-dessus
3. **Testez** avec le formulaire

Ce template devrait fonctionner sans erreur de syntaxe !
