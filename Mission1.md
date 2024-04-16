# MarkDown이란?

**MarkDown**문서는 텍스트 기반의 마크업 언어이다.
2004년 존그루버에 의해 만들어졌으며 쉽게 쓰고 읽을수 있고, HTML로 변환할 수 있다.
특수기호와 문자를 이용해 매우 간단한 구조의 문법을 사용하여 웹에서 보다 빠르게 컨텐츠를
작성하고 직관적으로 인식이 가능하다.

*MarkDown의 장점은 크게 **5가지**가 있다.*

#### 1. 간결하다. 
    문법이 많지 않아 쉽고 부담없이 사용 할 수 있다.
#### 2. 별도의 도구 없이 사용이 가능하다.
    키보드만으로 조작이 가능해서 쉽게 구조적인 글쓰기가 가능하다.
#### 3. 다양한 형태로 변환이 가능하다.
    자신이 편한 형태로 바꾸어 쓸 수 있다.
#### 4. 텍스트로 저장되어 용량이 적다.
    텍스트로 저장이 되기 때문에 용량이 적어지고 검색이 쉬워진다.
#### 5. 지원하는 프로그램과 플랫폼이 다양하다.
    다양한 프로그램과 플랫폼으로 편집이 가능하다.

하지만 이러한 장점이 많은 파일도 단점은 있다.

*단점은 크게 **3가지**로 구분이 가능하다.*

#### 1. 표준이 없다.
#### 2. 표준이 없기 때문에 도구에 따라 변환방식 및 생성물이 다르다.
    (사실, 1번과 2번은 그렇게 큰 문제가 되지 않는다)
#### 3. 뷰어의 속도가 느리다.
    이것도 큰 문제는 아니지만 실시간 확인 작업 시 약간의 딜레이가 생긴다.

# 기본적인 문법
#### 1. 헤더(Headers)


# This is a H1
## This is a H2
### This is a H3
#### This is a H4
##### This is a H5
###### This is a H6

(#######(This is a H7) 은 지원하지 않는다.)

H1은 큰제목

H2는 문서 부제목

*글머리는 1~6까지 지원*

#### 2. BlockQuote(다른 출처로부터 인용된 블록을 정의할 때 사용되는 태그)
이메일에서 사용하는 `>` 블럭 인용문자를 사용한다.

> this is a first blockquote
>   >This is a second blockquote
>   >   > This is a third blockquote

- 위 코드 안에서는 다른 마크다운 요소를 포함할 수 있다.

#### 3. 목록
- 순서 있는 목록(번호)

순서 있는 목록은 숫자와 점을 사용한다.

```
1. 하나
2. 둘
3. 셋
```

##### 결과
1. 하나
2. 둘
3. 셋

(참고로 현재까지 어떤 번호를 입력해도 순서는 내림차순으로 정의된다.)
```
1. 하나
3. 둘
2. 셋
```
##### 결과

1. 하나
3. 둘
2. 셋

- 순서 없는 목록(글머리 기호 `*`, `+`, `-` 지원)

```
* 빨강
    * 노랑
        * 파랑

+ 빨강
    + 노랑
        + 파랑

- 빨강
    - 노랑
        - 파랑

```

##### 결과

* 빨강
    * 노랑
        * 파랑

+ 빨강
    + 노랑
        + 파랑

- 빨강
    - 노랑
        - 파랑

**(글머리 기호는 혼합 사용이 가능하다)**

```
* 1단계
  - 2단계
    + 3단계
      + 4단계
```

##### 결과

* 1단계
  - 2단계
    + 3단계
      + 4단계


#### 4. 코드

- 들여쓰기

4개의 공백 또는 하나의 탭으로 들여쓰기를 만나면 변환되기 시작하여 들여쓰지 않은 행알 만날때까지 변환이 계속된다.

**사용예시**

```
This is a normal paragraph

    This is a code block
    
End code block.

```

##### 결과

This is a normal paragraph

    This is a code block
    
End code block.

*한줄 띄어쓰기를 안하면 인식이 되지 않는 문제가 발생한다.*

```
This is a normal paragraph
    This is a code block
End code block.
```

##### 결과
This is a normal paragraph
    This is a code block
End code block.


- 코드블럭

  코드블럭은 2가지 방식을 사용할 수 있다.
1. `<pre><code>{code}</code></pre>`를 사용한다.

```

<pre><code>
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }

}
</code></pre>

```


##### 결과
<pre><code>
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }

}
</code></pre>


2. 코드블럭코드(**```**)를 이용하는 방법

```
```java
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}
```


##### 결과
```java
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}
```

#### 5. 수평선

```
* * *

***

*****

- - -

---------------------------------------
```

위 줄은 모두 수평선을 만든다. *주로 페이지 나누기 용도*로 사용한다.

##### 결과

* * *

***

*****

- - -

---------------------------------------

#### 6. 링크

- 참조링크

```
  사용문법 : [Title](link)
  적용예시 : [Google](https://google.com, "google link")
```
##### 결과
[Google](https://google.com, "google link")



- 자동연결

  일반적인 URL 혹은 이메일 주소인 경우 적절한 형식으로 링크를 형성한다.

```
* 외부링크 : <https://example.com/>
* 이메일링크 : <address@example.com>
```
##### 결과
* 외부링크 : <https://example.com/>
* 이메일링크 : <address@example.com>

#### 7. 강조

```
*single asterisks*
_single underscores_
**double asterisks**
__double underscores__
~~cancelline~~
```

##### 결과
*single asterisks*

_single underscores_

**double asterisks**

__double underscores__

~~cancelline~~


#### 8. 이미지
```
![테스트 이미지](https://github.com/leesiuuuu/MSG-8-Homework/blob/main/Test_image.png?raw=true)
![테스트 이미지](https://github.com/leesiuuuu/MSG-8-Homework/blob/main/Test_image.png?raw=true "테스트 이미지지롱")
```

##### 결과

![테스트 이미지](https://github.com/leesiuuuu/MSG-8-Homework/blob/main/Test_image.png?raw=true)
![테스트 이미지](https://github.com/leesiuuuu/MSG-8-Homework/blob/main/Test_image.png?raw=true "테스트 이미지지롱")

**사이즈 조절 기능은 없기 때문에 `<img width="" height=""></img>`를 이용한다.**

- 예시
```
<img src="https://github.com/leesiuuuu/MSG-8-Homework/blob/main/Test_image.png?raw=true" width="450px" height="300px" title="px(픽셀) 크기 설정" alt="테스트 이미지지롱"></img><br/>

<img src="https://github.com/leesiuuuu/MSG-8-Homework/blob/main/Test_image.png?raw=true" width="40%" height="30%" title="px(픽셀)크기 설정" alt="테스트 이미지지롱"></img>
```

##### 결과

<img src="https://github.com/leesiuuuu/MSG-8-Homework/blob/main/Test_image.png?raw=true" width="450px" height="300px" title="px(픽셀) 크기 설정" alt="테스트 이미지지롱"></img><br/>

<img src="https://github.com/leesiuuuu/MSG-8-Homework/blob/main/Test_image.png?raw=true" width="20%" height="30%" title="px(픽셀)크기 설정" alt="테스트 이미지지롱"></img>


#### 9. 줄바꿈

**3칸 이상 띄어쓰기` `를 하면 줄이 바뀐다.

```
*줄 바꿈은 띄어쓰기 3칸을 해야 바뀐다   //띄어쓰기 3칸
이렇게 말이죠.
```

##### 결과
*줄 바꿈은 띄어쓰기 3칸을 해야 바뀐다   
이렇게 말이죠.


# 정리
**마크다운**은 기본 문법만 알고 있으면 일반 텍스트 편집기에서도
쉽게 작업이 가능한 마크업 언어이다.
현재 다양한 도구, 플랫폼에서 지원하고 있기 때문에 더욱 손쉽게
스타일적용된 문서를 작성할 수 있어서 널리 사용되고 있다.

  > 마크다운 싸랑해요

~~솔직히 마크다운 장단점과 문법을 정리하면서 약간 노션 작성할 때와 비슷하다는 느낌을 받았습니다.~~

