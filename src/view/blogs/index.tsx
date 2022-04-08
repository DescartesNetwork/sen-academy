import { useMemo, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import {
  Button,
  Col,
  Image,
  Radio,
  RadioChangeEvent,
  Row,
  Space,
  Typography,
} from 'antd'
import { BlogTabs, DEFAULT_LIMIT_POST, PostsData, SelectedTabs } from 'constant'
import PostCard from './postCard'
import MakeUpHtml from 'components/makeUpHtml'

import './index.less'

const Blogs = () => {
  const [seletecCat, setSeletecCat] = useState<SelectedTabs>(SelectedTabs.all)
  const [postPerpage, setPostPerpage] = useState(DEFAULT_LIMIT_POST)
  const history = useHistory()
  const { t } = useTranslation()
  const location = useLocation()
  const query = useMemo(() => new URLSearchParams(location.search), [location])
  const blogCat = query.get('category') || ''

  const compare = (a: PostsData, b: PostsData) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    return 0
  }

  const onSelectCategory = (e: RadioChangeEvent) => {
    setSeletecCat(e.target.value)
    return setPostPerpage(DEFAULT_LIMIT_POST)
  }

  const blogTabs: BlogTabs[] = t('blogs.tabs', { returnObjects: true })
  const postsData: PostsData[] = t(`postsData.${blogCat}`, {
    returnObjects: true,
  })

  const filteredData = useMemo(() => {
    if (!postsData.length) return []
    return postsData?.filter(({ category }) => category.includes(seletecCat))
  }, [postsData, seletecCat])

  const renderData = useMemo(() => {
    const nextData = seletecCat === SelectedTabs.all ? postsData : filteredData
    if (!nextData.length) return []
    return nextData?.sort(compare)
  }, [filteredData, postsData, seletecCat])

  const limitPost =
    postPerpage >= renderData?.length ? renderData?.length : postPerpage

  return (
    <Row gutter={[24, 24]} style={{ padding: '0 12px' }} justify="center">
      <Col span={24} className="container">
        <Row
          gutter={[40, 40]}
          className="blog-banner"
          align="middle"
          justify="center"
        >
          <Col xs={24} md={12}>
            <Space direction="vertical" size={32}>
              <span className="title">
                <MakeUpHtml>
                  {t(`banner.subDesc.${blogCat}.title`, {
                    returnObjects: true,
                  })}
                </MakeUpHtml>
              </span>
              <Space direction="vertical">
                <Typography.Text style={{ fontSize: 20 }} type="secondary">
                  {t(`banner.subDesc.${blogCat}.label`, {
                    returnObjects: true,
                  })}
                </Typography.Text>
              </Space>
            </Space>
          </Col>
          <Col xs={24} md={12} className={blogCat === 'dev' ? 'bg-circle' : ''}>
            <Image
              style={{ position: 'relative', zIndex: 9 }}
              src={t(`banner.subDesc.${blogCat}.src`, {
                returnObjects: true,
              })}
              preview={false}
            />
          </Col>
          <Col span={24} className="safe-space" /> {/* Safe space */}
          <Col span={24}>
            <Radio.Group
              onChange={onSelectCategory}
              className="blogs-btn"
              defaultValue={seletecCat}
            >
              <Space>
                {blogTabs?.map((tab) => (
                  <Space key={tab.key}>
                    <Radio.Button value={tab.key}>{tab.label}</Radio.Button>
                  </Space>
                ))}
              </Space>
            </Radio.Group>
          </Col>
          <Col span={24}>
            <Row gutter={[24, 24]}>
              {renderData?.slice(0, limitPost).map((data, idx) => (
                <Col xs={24} md={12} lg={8} key={data.title + idx}>
                  <PostCard
                    data={data}
                    onClick={(id) =>
                      history.push(`/blogs/${id}?category=${blogCat}`)
                    }
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col>
            <Button
              className="blogs-btn"
              onClick={() => setPostPerpage(postPerpage + 3)}
            >
              {t('viewMore', { returnObjects: true })}
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Blogs
