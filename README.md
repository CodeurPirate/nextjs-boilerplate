# nextjs-boilerplate

> 📦 nextjs boilerplate

Next.js 보일러플레이트

<br />

## 설치된 항목

- ✅ ESLint flat config v9, Prettier
- ✅ Tailwind CSS v4
- ✅ Lefthook
- ✅ GitHub 설정
- ✅ Docker Build 지원

<br />

## 사용 조건

- Node.js `v22.14.0`
- pnpm `v10.5.2`

<br />

## Docker 빌드 및 실행

도커 컨테이너에서 Next.js 애플리케이션을 실행하는 방법

1. 도커 이미지 빌드 및 실행

```shell
# 1. 도커 폴더로 이동
cd docker/

# 2. 도커 컴포즈 실행
docker compose --project-name nextjs-boilerplate up --build -d

# 3. 컨테이너 상태 확인
docker ps
```

2. 실행 중인 컨테이너 확인

```shell
docker logs -f nextjs-app

# 배포된 서비스 http://localhost:3000 접속가능
```

3. 컨테이너 중지 및 삭제

```shell
docker compose down
```