# TEMPLATE EMAILJS CORRIGÉ - IMAGES QUI FONCTIONNENT

## Template HTML avec balises img correctes :

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
        .label { font-weight: bold; color: #1e40af; display: block; margin-bottom: 5px; font-size: 14px; }
        .value { color: #374151; margin-left: 10px; }
        .footer { background: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        h3 { color: #1e40af; margin-bottom: 10px; }
        h4 { color: #374151; margin-bottom: 15px; }
        .image-container { text-align: center; margin: 15px 0; }
        .image-container img { 
            max-width: 100%; 
            max-height: 300px; 
            border: 2px solid #ddd; 
            border-radius: 8px; 
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .image-title { 
            font-weight: bold; 
            color: #1e40af; 
            margin-bottom: 10px; 
            font-size: 14px;
        }
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
            
            <div class="image-container">
                <div class="image-title">📎 Preuve de paiement CNPS</div>
                <img src="{{cnps_proof_base64}}" alt="Preuve de paiement CNPS" />
            </div>
        </div>

        <div class="section">
            <h4>🆔 CARTE D'IDENTITÉ</h4>
            <p><span class="label">Pièce d'identité :</span> <span class="value">{{identity_card_name}}</span></p>
            
            <div class="image-container">
                <div class="image-title">🆔 Carte d'identité (Recto/Verso)</div>
                <img src="{{identity_card_base64}}" alt="Carte d'identité" />
            </div>
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

## 🎯 Corrections importantes :

1. **Balises `<img>` correctes** avec `src="{{variable}}"`
2. **Style CSS amélioré** pour les images
3. **Containers dédiés** pour chaque image
4. **Titres visibles** au-dessus des images
5. **Dimensions contrôlées** (max-height: 300px)

## 📋 Variables requises :

- `cnps_proof_base64` - Image CNPS compressée
- `identity_card_base64` - Image carte identité compressée
- `cnps_proof_name` - Nom fichier CNPS
- `identity_card_name` - Nom fichier carte identité
- Plus toutes les autres variables de données

## 🚀 Instructions :

1. **Copiez ce HTML** dans votre template EmailJS
2. **Ajoutez TOUTES les variables** ci-dessus
3. **Testez** avec des images compressées

Ce template affichera correctement les deux images !
