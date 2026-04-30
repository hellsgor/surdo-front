import { Section } from "@/components/ui/Section/Section";
import type { Tasks } from "@/types/widgets/Tasks";
import styles from "./Tasks.module.scss";
import { nobr, pretty } from "@/utils/typography";
import { Task } from "@/components/ui/Task/Task";

type Props = { data: Tasks };

export function Tasks({ data }: Props) {
    const tasks = data.servicePages.toSorted((a, b) => a.order - b.order);

    return (
        <Section sectionName="tasks" className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.contentWrapper}>
                    <div className={styles.content}>
                        <h2 dangerouslySetInnerHTML={{ __html: pretty(data.title) }} />
                        <p>{nobr(data.text || "")}</p>
                    </div>
                </div>

                <div className={styles.tasks}>
                    {tasks.map((task) => (
                        <Task key={task.id} data={task} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
