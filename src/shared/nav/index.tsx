import { useCallback, useState } from "react";
import * as S from "./styles";
import C from "@/constants";

export default () => {
  const [open, setOpen] = useState(false);
  const { contact, navigation } = C.data;

  const handleClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo />
        <S.Nav>
          <S.Items>
            <S.Link href={contact[0].link}>
              <S.Phone />
              {contact[0].content}
            </S.Link>
          </S.Items>
          <S.Link href={navigation[5]?.href}>
            <S.Externa />
            {navigation[5].text}
          </S.Link>
        </S.Nav>
        <S.Menu onClick={handleClick}>
          <S.Text>Menu</S.Text>
          <S.Group>
            <S.Line />
            <S.Line />
            <S.Line />
          </S.Group>
        </S.Menu>

        <S.Overlay $open={open}>
          <S.Modal>
            <S.WrapperModal>
              <S.HeaderModal>
                <S.TextMenu>Menu</S.TextMenu>
                <S.ButtonClose onClick={handleClick}>Fechar</S.ButtonClose>
              </S.HeaderModal>
              <S.MainModal>
                <S.List>
                  {navigation.map(({ title, href }) => (
                    <S.Item key={title} href={href}>
                      {title}
                    </S.Item>
                  ))}
                </S.List>
              </S.MainModal>
              <S.FooterModal>
                <S.Social>
                  <a href={C.data.contact[0].link}>
                    <span>Phone:</span> +41 79 934 67 83
                  </a>
                </S.Social>
                <S.Social>
                  <a href={C.data.contact[1].link}>
                    <span>E-Mail:</span> info@bueroimflow.ch
                  </a>
                </S.Social>
              </S.FooterModal>
            </S.WrapperModal>
          </S.Modal>
          <S.Black onClick={handleClick} />
        </S.Overlay>
      </S.Wrapper>
    </S.Header>
  );
};
