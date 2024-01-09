// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/selector', function (req, res) {
  res.render('selector', {})
})

router.get('/selector2', function (req, res) {
  res.render('selector2', {})
})

router.get('/selector3', function (req, res) {
  res.render('selector3', {})
})

router.get('/selector4', function (req, res) {
  res.render('selector4', {})
})
router.get('/colors', function (req, res) {
  res.render('colors', {})
})
// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
