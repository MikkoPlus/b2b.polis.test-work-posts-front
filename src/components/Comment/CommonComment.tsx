import { formatDate } from "@/helpers/helperFuncions";
import type { IComment } from "./commentTypes";
import styles from "./CommonComment.module.scss";

export const CommonComment: React.FC<IComment> = ({ id, authorName, createdAt, content }) => {
  return (
    <li key={id} className={styles.comment}>
      <div className={styles.comment__header}>
        <span className={styles.comment__author}>{authorName}</span>
        <span className={styles.comment__date}>{formatDate(createdAt)}</span>
      </div>
      <p className={styles.comment__content}>{content}</p>
    </li>
  );
};
