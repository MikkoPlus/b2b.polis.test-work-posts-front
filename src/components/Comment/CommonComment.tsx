import { formatDate } from "@/helpers/helperFuncions";
import type { IComment } from "./commentTypes";
import styles from "./CommonComment.module.scss";

export const CommonComment: React.FC<IComment> = ({ id, author_name, created_at, content }) => {
  return (
    <li key={id} className={styles.comment}>
      <div className={styles.comment__header}>
        <span className={styles.comment__author}>{author_name}</span>
        <span className={styles.comment__date}>{formatDate(created_at)}</span>
      </div>
      <p className={styles.comment__content}>{content}</p>
    </li>
  );
};
