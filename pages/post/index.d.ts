export default PortableText;
export function blockContentToPlainText(blocks?: [any]): string;
/**
 * Renders an array of Portable Text blocks as React components.
 *
 * @param {object} props
 * @param {object[]} props.content Array of portable text blocks
 * @param {string} [props.dataset] Dataset for your sanity project
 * @param {string} [props.projectId] Project ID of your sanity project
 * @param {string} [props.className] Optional className
 * @param {object} [props.serializers] Optional serialization overrides
 * @returns
 */
declare function PortableText({
    content,
    className,
    serializers,
    dataset,
    projectId,
    ...additionalOptions
}: {
    content: object[];
    dataset?: string;
    projectId?: string;
    className?: string;
    serializers?: object;
}): any;
declare namespace PortableText {
    namespace propTypes {
        const content: any;
        const className: any;
        const projectId: any;
        const dataset: any;
        const serializers: any;
    }
}
