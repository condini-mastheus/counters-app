# Counters App

Esse é um projeto de teste para a empresa Brainweb como desafio de desenvolvedor Frontend. Para esse projeto foi utilizado o padrão [Create Native CLI](https://facebook.github.io/react-native/docs/getting-started.html).

## Executar o projeto local

Execute esses comandos no seu terminal:<br>
Clone esse repositorio `git clone https://github.com/condini-mastheus/counters-app.git`<br>
Instale as dependências executando `yarn`<br>
Execute `react-native run-android` ou `react-native run-ios` e espere o app carregar no seu emulador.

## Preparando para produção

Gerando o `.apk` ou `.ipa`

### Android

Execute no terminal: `keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`<br>
Coloque o arquivo `my-release-key.keystore` gerado na pasta `<project_dir>/android/app`<br>
Edite o arquivo `<project_dir>/android/gradle.properties` e coloque essas informações:

```
  MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
  MYAPP_RELEASE_KEY_ALIAS=my-key-alias
  MYAPP_RELEASE_STORE_PASSWORD=
  MYAPP_RELEASE_KEY_PASSWORD=
```

<br>

Edite o arquivo `<project_dir>/android/app/build.gradle`: <br>

```
 ...
  android {
      ...
      defaultConfig { ... }
      signingConfigs {
          release {
              if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                  storeFile file(MYAPP_RELEASE_STORE_FILE)
                  storePassword MYAPP_RELEASE_STORE_PASSWORD
                  keyAlias MYAPP_RELEASE_KEY_ALIAS
                  keyPassword MYAPP_RELEASE_KEY_PASSWORD
              }
          }
        }
      }
      buildTypes {
          release {
              ...
              signingConfig signingConfigs.release
          }
      }
  }
...
```

<br>
Na pasta `<project_dir>/android`, execute o comando `gradlew assembleRelease`<br>

### IOS

Aguarndo atualizações...

## Implantação

Como publicar na Play Store / Apple Store:

### Android

O APK gerado pode ser encontrado em `<project_dir>/android/app/build/outputs/apk/app-release.apk`, e está pronto para ser distribuído.

### IOS

Aguarndo atualizações...
