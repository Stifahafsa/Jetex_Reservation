# Gestion des Vols ✈️

Ce projet est une application web développée en **React** et **Redux**, permettant de gérer et afficher une liste de vols en temps réel. L'objectif est de fournir une interface intuitive pour consulter les vols disponibles, incluant des informations comme la ville de départ, la ville d'arrivée, la date, le prix, et une image associée.

---

## Table des Matières
1. [Aperçu](#aperçu)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies Utilisées](#technologies-utilisées)
4. [Installation](#installation)
5. [Structure du Projet](#structure-du-projet)
6. [Utilisation](#utilisation)
7. [Contributeurs](#contributeurs)


---

## Aperçu

![My First Redux app ](/public/site.png)
![My First Redux app ](/public/reservation.png)


## Fonctionnalités

- Affichage d'une liste de vols.
- Chargement des données en temps réel via Redux.
- Gestion des états avec Redux (loading, succès, erreur).
- Design réactif et minimaliste.

---

## Technologies Utilisées

- **React** : Framework pour la construction de l'interface utilisateur.
- **Redux** : Gestion de l'état global de l'application.
- **React-Redux** : Liaison entre React et Redux.
- **Redux Toolkit** : Simplification de la configuration Redux.
- **CSS** : Pour le style de l'application.
- **JavaScript (ES6)** : Langage de programmation principal.

---

## Installation

1. Clonez ce dépôt sur votre machine locale :
   ```bash
   git clone https://github.com/Stifahafsa/Jetex_Reservation.git
   ```

2. Accédez au dossier du projet :
   ```bash
   cd gestvol
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

4. Lancez l'application :
   ```bash
   npm start
   ```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

---

## Structure du Projet

Voici un aperçu de l'organisation des fichiers :

```
src/
├── components/
│   ├── VolsList.jsx  # Composant principal pour afficher les vols
├── reducers/
│   ├── VolsReducer.js  # Gestion de l'état Redux pour les vols
├── store/
│   ├── index.js  # Configuration du store Redux
├── App.js  # Composant principal
├── index.js  # Point d'entrée de l'application
├── index.css  # Styles globaux
```

---

## Utilisation

1. Lancez l'application avec `npm start`.
2. Explorez les vols disponibles sur la page principale.
3. Les vols se chargent automatiquement depuis un état global géré par Redux.

---

## Contributeurs

- **Votre Nom** : Développeur principal.

Si vous souhaitez contribuer, veuillez soumettre une *pull request* ou ouvrir une *issue*.

---

