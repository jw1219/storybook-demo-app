import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

/**
 * Rowコンポーネントは、テーブルの構成要素である。
 * 一つのRowは、テーブルの１行を表す。Rowを利用して、関連性のある情報をまとめる。
 */
export const Row = ({
  label,
  icon = null,
  hasButton = true,
  hasCheckbox = true
}) => {
  return (
    <div className="w-full flex justify-between border-b-[1px]">
      <div className="flex items-center">
        {hasCheckbox && <MdOutlineCheckBoxOutlineBlank />}
        {icon}
        <p>{label}</p>
      </div>
      {hasButton && (
        <div>
          <button type="button" className="text-sky-500">詳細</button>
        </div>
      )}
    </div>
  );
}