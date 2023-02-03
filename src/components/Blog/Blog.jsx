import Button from 'components/Button';
import Container from 'components/Container';
import styles from './Blog.module.scss';

function Blog() {
  return (
    <section className={styles.section} id="blog">
      <Container resetPadding grid>
        <div className={styles.image}></div>

        <div className={styles.content}>
          <p className={styles.pretitle}>April 16 2020</p>
          <h2 className={styles.title}>Blog Post One</h2>
          <p className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>

          <Button text="Read Our Blog" secondClass="blog" />
        </div>
      </Container>
    </section>
  );
}

export default Blog;
