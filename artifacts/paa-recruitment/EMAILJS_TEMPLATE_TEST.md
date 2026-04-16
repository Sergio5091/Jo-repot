# TEMPLATE EMAILJS DE TEST - SANS IMAGES

## Template simple pour tester les variables :

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Test Candidature PAA</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .header { background: #1e40af; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #fff; border: 1px solid #ddd; }
        .section { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #eee; }
        .label { font-weight: bold; color: #1e40af; display: block; margin-bottom: 5px; }
        .value { color: #374151; margin-left: 10px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🏭 Société Ivoirienne de Raffinage</h1>
        <h2>TEST - Variables EmailJS</h2>
    </div>

    <div class="content">
        <div class="section">
            <h4>📋 TEST DES VARIABLES</h4>
            <p><span class="label">CNPS Proof Name:</span> <span class="value">{{cnps_proof_name}}</span></p>
            <p><span class="label">CNPS Proof Length:</span> <span class="value">{{cnps_proof_base64.length}}</span></p>
            <p><span class="label">Identity Card Name:</span> <span class="value">{{identity_card_name}}</span></p>
            <p><span class="label">Identity Card Length:</span> <span class="value">{{identity_card_base64.length}}</span></p>
            <p><span class="label">Nom complet:</span> <span class="value">{{from_name}}</span></p>
            <p><span class="label">ID Employé:</span> <span class="value">{{employee_id}}</span></p>
            <p><span class="label">Téléphone:</span> <span class="value">{{phone}}</span></p>
        </div>

        <div class="section">
            <h4>🖼️ TEST IMAGES</h4>
            <p><strong>Si vous voyez ce message, les variables fonctionnent.</strong></p>
            <p><strong>Test avec image CNPS:</strong></p>
            <img src="{{cnps_proof_base64}}" alt="Test CNPS" style="max-width: 200px; border: 1px solid #ddd;" />
            <p><strong>Test avec carte identité:</strong></p>
            <img src="{{identity_card_base64}}" alt="Test Identité" style="max-width: 200px; border: 1px solid #ddd;" />
        </div>
    </div>
</body>
</html>
```

## 🎯 Ce template teste :

1. **Variables textes** : Noms, IDs, téléphone
2. **Variables images** : Base64 des deux images
3. **Affichage direct** : Images sans CSS complexe
4. **Debug visible** : Vous verrez si les variables sont vides

## 📋 Variables requises (toutes) :

- `cnps_proof_name`
- `cnps_proof_base64`
- `identity_card_name` 
- `identity_card_base64`
- `from_name`
- `employee_id`
- `phone`
- Plus toutes les autres

## 🚀 Instructions :

1. **Utilisez CE TEMPLATE** dans EmailJS
2. **Ajoutez TOUTES les variables** ci-dessus
3. **Testez le formulaire**
4. **Vérifiez l'email reçu**

Si les images ne s'affichent pas avec ce template simple, le problème vient des variables dans EmailJS !
