# TEMPLATE EMAILJS ULTRA-SIMPLE

## Version minimale - Copiez-collez directement :

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Candidature PAA</title>
</head>
<body>
    <h1>🏭 Société Ivoirienne de Raffinage - Test Images</h1>
    
    <h2>Informations du candidat</h2>
    <p><strong>Nom:</strong> {{from_name}}</p>
    <p><strong>ID:</strong> {{employee_id}}</p>
    <p><strong>Téléphone:</strong> {{phone}}</p>
    
    <hr>
    
    <h2>📎 Preuve CNPS</h2>
    <p><strong>Fichier:</strong> {{cnps_proof_name}}</p>
    <img src="{{cnps_proof_base64}}" alt="CNPS" style="max-width: 300px; border: 1px solid #ccc;">
    
    <hr>
    
    <h2>🆔 Carte d'identité</h2>
    <p><strong>Fichier:</strong> {{identity_card_name}}</p>
    <img src="{{identity_card_base64}}" alt="Identité" style="max-width: 300px; border: 1px solid #ccc;">
    
    <hr>
    
    <p><small>Date: {{submission_date}}</small></p>
</body>
</html>
```

## 🎯 Ce template a :

- **HTML minimal** - Pas de CSS complexe
- **Balises img directes** - Style inline simple
- **Toutes les variables** requises
- **Test immédiat** possible

## 📋 Instructions :

1. **Remplacez TOUT** votre template EmailJS avec ce code
2. **Sauvegardez**
3. **Testez le formulaire**

Si les images ne s'affichent pas avec ce template ultra-simple, le problème vient :
- ❌ **Variables non envoyées** par le code
- ❌ **Base64 corrompu**
- ❌ **Template EmailJS mal configuré**

Testez d'abord avec ça ! 🔍
