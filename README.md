### Hexlet tests and linter status:

[![Actions Status](https://github.com/Ingsip/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Ingsip/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/af94a855595df20d4333/maintainability)](https://codeclimate.com/github/Ingsip/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/af94a855595df20d4333/test_coverage)](https://codeclimate.com/github/Ingsip/frontend-project-46/test_coverage)

### Сравнение плоских файлов (JSON)

##### Запуск сравнения

```
$ gendiff __fixtures__/file1.json __fixtures__/file2.json
```

##### Демонстрация: [Сравнение плоских файлов (JSON)](https://asciinema.org/a/ttMDA735LWS87RvyUCMBGoWJv)

### Сравнение плоских файлов (yaml)

##### Запуск сравнения

```
$ gendiff __fixtures__/file1.yaml __fixtures__/file2.yaml
```

##### Демонстрация: [Сравнение плоских файлов (yaml)](https://asciinema.org/a/n8k2vFdPI9W6g3ZyHxjOk3X8A)

### Вывод в формате stylish

##### Запуск вывода в формате stylish

```
$ gendiff __fixtures__/file1.json __fixtures__/file2.json
```

##### Демонстрация: [Рекурсивное сравнение](https://asciinema.org/a/e6BWOOVz4muyvdRwV4BITsTFG)

### Вывод в формате plain

##### Запуск вывода в формате plain

```
$ gendiff --format plain  __fixtures__/file1.json __fixtures__/file2.json
```

##### Демонстрация: [Вывод в формате plain](https://asciinema.org/a/zF2nDMDSpsjV2mJYwgjDa7L9h)

### Вывод в формате json

##### Запуск вывода в формате plain

```
$ gendiff --format json  __fixtures__/file1.json __fixtures__/file2.json
```

##### Демонстрация: [Вывод в формате plain](https://asciinema.org/a/wIkK7I23SaVt7tXojzCxtHEMn)
