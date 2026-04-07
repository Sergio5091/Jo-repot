# TEMPLATE EMAILJS FINAL - AVEC DOUBLE IMAGES

## Template HTML complet pour EmailJS :

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nouvelle candidature Port Autonome d'Abidjan</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            max-width: 600px;
            margin: 0 auto;
        }
        .header { 
            background: #1e40af; 
            color: white; 
            padding: 20px; 
            text-align: center; 
            border-radius: 8px 8px 0 0;
        }
        .content { 
            padding: 20px; 
            background: #fff;
            border: 1px solid #ddd;
            border-top: none;
        }
        .section { 
            margin-bottom: 20px; 
            padding-bottom: 15px; 
            border-bottom: 2px solid #e5e7eb;
        }
        .section:last-child {
            border-bottom: none;
        }
        .label { 
            font-weight: bold; 
            color: #1e40af; 
            display: inline-block; 
            min-width: 140px;
            font-size: 14px;
        }
        .value { 
            margin-left: 10px; 
            color: #374151;
        }
        .highlight { 
            background-color: #fef3c7; 
            padding: 15px; 
            border-radius: 8px; 
            border-left: 4px solid #f59e0b;
            margin-bottom: 20px;
        }
        .info-grid { 
            display: grid; 
            grid-template-columns: 1fr 1fr; 
            gap: 12px; 
            margin: 15px 0;
        }
        .footer { 
            background: #f8f9fa; 
            padding: 20px; 
            text-align: center; 
            font-size: 12px; 
            color: #666;
            border: 1px solid #ddd;
            border-top: none;
        }
        h3 { color: #1e40af; margin-bottom: 10px; }
        h4 { color: #374151; margin-bottom: 15px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; }
        img { 
            max-width: 100%; 
            height: auto; 
            border: 1px solid #ddd; 
            border-radius: 8px; 
            margin-top: 10px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .logo-img {
            max-height: 60px; 
            margin-bottom: 10px;
            background: white; 
            padding: 5px;
            border-radius: 4px;
        }
        .images-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-top: 15px;
        }
        .image-box {
            text-align: center;
        }
        .image-title {
            font-size: 12px;
            font-weight: bold;
            color: #1e40af;
            margin-bottom: 8px;
        }
    </style>
</head>
<body>
    <div class="header">
        <div style="text-align: center; margin-bottom: 15px;">
            <img src="https://votre-domaine.com/logo.jpeg" alt="Logo Port Autonome d'Abidjan" class="logo-img" />
        </div>
        <h1>🚢 Port Autonome d'Abidjan</h1>
        <h2>Direction des Ressources Humaines</h2>
        <p>Campagne de recrutement 2026</p>
    </div>

    <div class="content">
        <div class="highlight">
            <h3>📋 NOUVELLE CANDIDATURE REÇUE</h3>
            <p><strong>Date de soumission :</strong> {{submission_date}}</p>
        </div>

        <div class="section">
            <h4>👤 INFORMATIONS D'IDENTITÉ</h4>
            <div class="info-grid">
                <div><span class="label">ID Employé :</span> <span class="value">{{employee_id}}</span></div>
                <div><span class="label">Nom complet :</span> <span class="value">{{from_name}}</span></div>
                <div><span class="label">Nom de famille :</span> <span class="value">{{full_name}}</span></div>
                <div><span class="label">Prénom :</span> <span class="value">{{first_name}}</span></div>
                <div><span class="label">Téléphone :</span> <span class="value">{{phone}}</span></div>
            </div>
        </div>

        <div class="section">
            <h4>🚨 CONTACT D'URGENCE</h4>
            <div class="info-grid">
                <div><span class="label">Nom :</span> <span class="value">{{emergency_name}}</span></div>
                <div><span class="label">Téléphone :</span> <span class="value">{{emergency_phone}}</span></div>
            </div>
        </div>

        <div class="section">
            <h4>🏥 DISPONIBILITÉ ET SANTÉ</h4>
            <p><span class="label">Problème de santé :</span> <span class="value">{{health_issue}}</span></p>
            <p><span class="label">Date de disponibilité :</span> <span class="value">{{availability_date}}</span></p>
        </div>

        <div class="section">
            <h4>💼 INFORMATIONS CNPS</h4>
            <div class="info-grid">
                <div><span class="label">Carte CNPS :</span> <span class="value">{{has_cnps}}</span></div>
                <div><span class="label">Numéro CNPS :</span> <span class="value">{{cnps_number}}</span></div>
                <div><span class="label">Preuve de paiement :</span> <span class="value">{{cnps_proof_name}}</span></div>
            </div>

            <div class="images-container">
                <div class="image-box">
                    <div class="image-title">📎 Preuve de paiement CNPS</div>
                    {{#if cnps_proof_base64}}
                    <img src="{{cnps_proof_base64}}" alt="Preuve de paiement CNPS" />
                    {{else}}
                    <p style="color: #666; font-style: italic;">Aucune image</p>
                    {{/if}}
                </div>

                <div class="image-box">
                    <div class="image-title">🆔 Carte d'identité (Recto/Verso)</div>
                    {{#if identity_card_base64}}
                    <img src="{{identity_card_base64}}" alt="Carte d'identité" />
                    {{else}}
                    <p style="color: #666; font-style: italic;">Aucune image</p>
                    {{/if}}
                </div>
            </div>
        </div>

        <div class="section">
            <h4>✅ ENGAGEMENT ET VALIDATION</h4>
            <div class="info-grid">
                <div><span class="label">Confirmation exactitude :</span> <span class="value">{{confirm_accuracy}}</span></div>
                <div><span class="label">Acceptation CGU :</span> <span class="value">{{accept_terms}}</span></div>
            </div>
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

## 📋 Variables EmailJS requises :

Ajoutez ces variables dans votre template EmailJS :

- `employee_id` - ID employé
- `from_name` - Nom complet
- `full_name` - Nom de famille
- `first_name` - Prénom
- `phone` - Téléphone
- `emergency_name` - Contact urgence nom
- `emergency_phone` - Contact urgence téléphone
- `health_issue` - Problème santé
- `availability_date` - Date disponibilité
- `has_cnps` - Statut carte CNPS
- `cnps_number` - Numéro CNPS
- `cnps_proof_name` - Nom fichier preuve CNPS
- `cnps_proof_base64` - Image preuve CNPS en base64
- `identity_card_name` - Nom fichier carte identité
- `identity_card_base64` - Image carte identité en base64
- `confirm_accuracy` - Confirmation exactitude
- `accept_terms` - Acceptation CGU
- `submission_date` - Date soumission

## 🎯 Instructions :

1. **Allez sur EmailJS.com**
2. **Modifiez votre template** avec ce code HTML
3. **Ajoutez toutes les variables** ci-dessus
4. **Configurez** le destinataire : `supportrecrut@gmail.com`

Ce template affichera les DEUX images dans une grille élégante !
