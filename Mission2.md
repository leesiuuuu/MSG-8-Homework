# GitHub란 무엇인가?

**깃허브**는 소프트웨어 개발자들 사이에서 가장 인지도가 높은 형상 관리(변경 사항을 추적, 제어하는 과정) 플랫폼 중 하나이다.   
깃(Git)이라는 시스템을 기반으로 하며, 소스코드와 관련 파일을 저장하고 관리할 수 있는 웹 기반 호스팅 서비스를 제공한다.   
깃허브는 주요 특징으로는 `버전 관리`, `협업`, `이슈 트래킹`, `웹 호스팅`, `오픈소스` 등이 있다.   
   

   
# 깃허브에서 자주 쓰이는 용어

## 1. 스테이지(Stage)

`스테이지`는 버전으로 만들 파일이 **대기**하는 곳이다.    
만약 관리하는 폴더 내에서 10개의 파일을 수정했는데 4개의 파일만 버전으로 만들고 싶으면 이들만 스테이지로 넘겨주면 된다.   
   
   

## 2. 저장소(Repository)
   
`스테이지`에서 대기하고 있던 파일들을 버전으로 만들어 **저장**하는 곳이다.   
   

   
## 3. 커밋(Commit)
   
파일이 `스테이지`에 있다면 버전을 만들 수 있는데, 깃에서는 **버전을 만드는 것**을 `커밋`이라고 한다.   
커밋할 때는 그 버전에 어떤 변경 사항이 있는지를 알려주기 위해 메시지를 같이 기록해 주는 것이 좋다.   
   


## 4. .gitignore
   
버전 관리 중인 디렉터리 안에 **관리하지 않을** 특정 파일이나 디렉터리가 있다면,   
`.gitignore`파일을 만들어 그 목록을 지정할 수 있다.   
   


## 5. 브랜치(Branch)
   
변경 사항을 **분리하여 관리**할 수 있도록 합니다.   
각각의 `브랜치`는 **독립적인 작업 공간**을 가지며, 변경 사항을 추적하고 병합할 수 있다.   
   


## 6. 푸시(Push)
   
`푸시`는 로컬 저장소에서 변경된 코드를 원격 저장소로 **업로드**하는 작업이다.   
   


## 7. 풀(Pull)
   
`풀`은 원격 저장소에서 변경된 코드를 로컬 저장소로 **가져오는** 작업이다.   
_(실제 팀원들이 작업한 것이 내 로컬 프로젝트로 넘어옴)_   
   


## 8. Fetch Origin
   
원격 저장소로부터 **변경사항을 가져오는 동작**을 의미한다.   
위의 `풀(Pull)`과 다른 점은 변경 사항을 로컬 저장소에 반영하지는 않고 단순히 업데이트된 `커밋`들을 가져온다는 점이다.   
   


# 협업 방법   

깃허브의 공개 저장소는 주소만 알면 누구나 접속해서 소스를 볼 수 있다.   
하지만 누구나 `커밋(Commit)`이나 `푸시(Push)`를 할 수는 없다.   
   
## 1. GitHub Collaborator(협업자)로 등록하기
   
> repo > Settings > Collaborators > add people   
   
이름 또는 이메일 입력 후 초대한다.   
(초대받은 사람이 이메일에서 초대를 수락해야 협업자가 됨)   
   

## 2. git clone으로 프로젝트 시작하기   
   
> git clong [repo 주소]
   
`git clone`은 내 컴퓨터로 저장소를 그대로 가져오고 싶을때 사용하는 명령어이다.   
단순히 다운로드와는 다르게 `커밋 기록`, `History`를 모드 가져온다는 특징이 있다.   
`git`, `reset`등 명령어를 통해 이전 기록으로 돌아갈 수 있다.   
`pull`, `push`등을 통해 실제 저장소에 수정 사항을 반영하거나 내려받을 수 있다.   
   

## 2-1 git fetch로 수정사항 확인하기   
   
> git fetch
   
깃허브 상의 수정사항을 우선 내 컴퓨터의 다른 `Branch`로 체크아웃해서 수정사항을 받아오는 명령어이다.(브랜치 형태로 받아옴)   
   
#### 존재하는 브랜치 확인
    git branch -r    
    
#### 브랜치 변경(수정사항 반영)
    git checkout **[수정사항을 가져올 브랜치]**   
   

## 3. Fork로 원격 저장소 복제하기   
   
`Fork`란, 다른 사람의 `Repo`를 복제해서 내 `Repo`를 새로 만드는 기능이다.   
`Clone`과 마찬가지로 파일 뿐만 아니라 `Commit`기록까지 모두 복제할 수 있다.   
`Fork`한 `Repo`는 내 소유이기 때문에 자유롭게 다른 명령어 사용이 가능하다.
   

